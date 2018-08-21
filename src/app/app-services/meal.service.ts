import {Injectable} from '@angular/core';
import {MealItem, MealItemBundle, MealItemExtra, MealItemMain, MealItemRelish} from './models';
import {AngularFirestore, CollectionReference} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import SnapshotMetadata = firebase.firestore.SnapshotMetadata;

@Injectable({
    providedIn: 'root'
})
export class MealService {

    private mealRef;
    private readonly mainRef;
    private readonly relishRef;
    private readonly vegetableRef;
    private readonly extrasRef;

    constructor(private afStore: AngularFirestore) {
        this.mainRef = this.afStore.collection<MealItemMain>('meals/main/all');
        this.relishRef = this.afStore.collection<MealItemMain>('meals/relish/all');
        this.vegetableRef = this.afStore.collection<MealItemMain>('meals/vegetables/all');
        this.extrasRef = this.afStore.collection<MealItemMain>('meals/extras/all');
    }

    getMainItems(): Observable<MealItemMain[]> {
        return this.mainRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItemMain;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getRelishItems(): Observable<MealItemRelish[]> {
        return this.relishRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItemRelish;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getVegetableItems(): Observable<MealItemBundle[]> {
        return this.vegetableRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItemBundle;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getExtrasItems(): Observable<MealItemExtra[]> {
        return this.extrasRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItemExtra;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    saveMealItem(item: MealItem, type) {
        console.log('Type', type);
        if (type === 'main') {
            this.mealRef = this.mainRef
        } else if (type === 'relish') {
            this.mealRef = this.relishRef
        } else if (type === 'veg') {
            this.mealRef = this.vegetableRef
        } else if (type === 'extra') {
            this.mealRef = this.extrasRef
        }
        if (item.id) {
            return this.mealRef.doc(item.id).update(item);
        } else {
            return this.mealRef.add(Object.assign({}, item));
        }
    }
}
