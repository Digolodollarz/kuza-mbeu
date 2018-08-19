import {Injectable} from '@angular/core';
import {MealItem, MealItemBundle, MealItemExtra, MealItemMain, MealItemRelish} from './models';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class MealService {
    public mainItems = [
        {name: 'Sadza', price: 0},
        {name: 'Rice', price: 0},
        {name: 'Chips', price: 1},
    ];

    public relishItems = [
        {name: 'Chicken', price: 1},
        {name: 'Beef', price: 1},
        {name: 'T-Bone', price: 1.5},
        {name: 'Beans', price: 0.5},
        {name: 'Mince', price: 0.75},
    ];

    public vegetableItems = [
        {name: 'Coleslaw', price: 0, standalone: false},
        {name: 'Greens', price: 0, standalone: false},
        {name: 'Salads', price: 0, standalone: false, min_offer: 1.5},
    ];

    public extrasItems = [
        {name: 'Pepsi', price: 0.5},
        {name: 'Coke (bottle)', price: 0.5},
        {name: 'Coke (can)', price: 0.6},
    ];

    private mealRef;

    constructor(private afStore: AngularFirestore) {
        this.mealRef = this.afStore.collection<MealItemMain>('meals/main/all')
    }

    getMainItems(): Observable<MealItemMain[]> {
        return this.mealRef
            .snapshotChanges().map(actions => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItemMain;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            });
    }

    getRelishItems(): MealItemRelish[] {
        return this.relishItems;
    }

    getVegetableItems(): MealItemBundle[] {
        return this.vegetableItems;
    }

    getExtrasItems(): MealItemExtra[] {
        return this.extrasItems;
    }

    saveMealItem(item: MealItem) {
        if (item.id) {
            return this.mealRef.doc(item.id).update(item);
        } else {
            return this.mealRef.add(Object.assign({}, item));
        }
    }
}
