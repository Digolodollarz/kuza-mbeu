import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public fUser: UserProfile = {};
    private userDocument;

    constructor(public afAuth: AngularFireAuth,
                private afStore: AngularFirestore,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.afAuth.user.subscribe(user => {
            if (user != null) {
                this.userDocument = this.afStore.doc<UserProfile>('profiles/' + user.uid);
                this.userDocument.valueChanges().subscribe(profile => {
                    if (profile != null) {
                        this.fUser = profile;
                    } else {
                        if (user.displayName.lastIndexOf(' ') !== -1) {
                            this.fUser.lastName = user.displayName.substring(user.displayName.lastIndexOf(' '));
                            this.fUser.firstName = user.displayName.substring(0, user.displayName.lastIndexOf(' '));
                        } else {
                            this.fUser.firstName = user.displayName;
                        }
                        this.fUser.phoneNumber = user.phoneNumber;
                        this.fUser.email = user.email;
                        this.updateProfile();
                    }
                });
            } else {
                //   TODO: SEND NOTIFICATION FOR LOGGED OUT USER
            }
        });
    }

    login(provider: String) {
        try {
            if (provider === 'Google') {
                this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
                    .then().catch(error => {
                    if (error.code = 'auth/operation-not-allowed') {
                        alert('You are not allowed to do this! \n' + error.message)
                    } else if (error.code = 'auth/network-request-failed') {
                        alert('You can\'t log in while offline')
                    }
                });
            } else if (provider === 'Facebook') {
                this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then().catch(error => {
                    if (error.code = 'auth/operation-not-allowed') {
                        alert('You are not allowed to do this! \n' + error.message)
                    } else if (error.code = 'auth/network-request-failed') {
                        alert('You can\'t log in while offline')
                    }
                });
            } else if (provider === 'Twitter') {
                this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()).then().catch(error => {
                    if (error.code = 'auth/operation-not-allowed') {
                        alert('You are not allowed to do this! \n' + error.message)
                    } else if (error.code = 'auth/network-request-failed') {
                        alert('You can\'t log in while offline')
                    }
                });
            } else if (provider === 'Email') {
                this.afAuth.auth.signInWithPopup(new auth.EmailAuthProvider()).then().catch(error => {
                    if (error.code = 'auth/operation-not-allowed') {
                        alert('You are not allowed to do this! \n' + error.message)
                    } else if (error.code = 'auth/network-request-failed') {
                        alert('You can\'t log in while offline')
                    }
                });
            }
        } catch (e) {
            alert(e.code)
        }
    }

    signUpWithEmail(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
            })
            .catch(error => {
                console.log(error)
                throw error
            });
    }

    loginWithEmail(form) {
        const email = form.email;
        const password = form.password;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.navigate();
            })
            .catch(error => {
                console.log(error);
                alert(error);
                throw error
            });
    }

    navigate() {
        alert(this.route.snapshot.paramMap.get('return'));
        let nextUrl = '/';
        if (this.route.snapshot.paramMap.get('return')) {
            nextUrl = this.route.snapshot.paramMap.get('return');
        }
        this.router.navigate([nextUrl])
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
