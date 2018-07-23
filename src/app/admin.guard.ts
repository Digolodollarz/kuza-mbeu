import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/take';

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

        const user = this.afAuth.auth.currentUser;
        if (user === null) {
            return false;
        }
        this.afStore.doc<UserProfile>('profiles/' + user.uid)
            .valueChanges().take(1).subscribe(fUser => {
            if (fUser.role === 'ADMIN') {
                return true;
            } else {
                this.router.navigate(['/access-denied'])
            }
        });
        return true;
    }
}
