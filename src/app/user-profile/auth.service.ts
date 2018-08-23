import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {auth} from 'firebase';
import {Observable} from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public fUser: UserProfile = {};
    public afUser: Observable<firebase.User>;
    private userDocument;

    constructor(private afAuth: AngularFireAuth,
                private afStore: AngularFirestore) {
        this.afUser = this.afAuth.user
    }

    login(provider: String, username?: String, password?: String) {
        try {
            if (provider === 'Google') {
                return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            } else if (provider === 'Facebook') {
                return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
            } else if (provider === 'Twitter') {
                return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
            } else if (provider === 'Email') {
                return this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider());
            }
        } catch (e) {
            alert(e.code)
        }
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    updateProfile() {
        this.userDocument.update(this.fUser).catch(error => {
            if (error.code === 'not-found') {
                this.userDocument.set(this.fUser);
            }
        })
    }
}
