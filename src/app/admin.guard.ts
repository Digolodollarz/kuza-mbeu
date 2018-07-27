import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(public afAuth: AngularFireAuth,
                private afStore: AngularFirestore,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.afAuth.user.map(user => {
            if (user === null) {
                this.router.navigate(['/user-profile'], {queryParams: {login: true, return: next.url}});
                return false;
            } else {
                this.afStore.doc<UserProfile>('profiles/' + user.uid)
                    .valueChanges().map(fUser => {
                    if (fUser.role === 'ADMIN') {
                        return true;
                    } else {
                        this.router.navigate(['/access-denied']);
                        return false
                    }
                });
                return true
            }
        });
    }
}
