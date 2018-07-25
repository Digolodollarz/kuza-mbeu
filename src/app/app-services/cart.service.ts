import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireAuth} from 'angularfire2/auth';
import {CartItem} from './models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private cart;

    constructor(private afStore: AngularFirestore, private afAuth: AngularFireAuth) {
        this.afAuth.user.subscribe(user => {
            if (user) {
                const uid = user.uid;
                this.cart = afStore.collection<CartItem>('userdata/' + user.uid + '/cart');
            }
        });
    }

    public add() {
        return 0;
    }

    public getCount() {
        return 0;
    }
}
