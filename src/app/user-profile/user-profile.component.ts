import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    login() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
