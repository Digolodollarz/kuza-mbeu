import {Injectable} from '@angular/core';
import {MealItem} from './models';
import {AngularFirestore, CollectionReference} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
        this.mealRef = this.afStore.collection<MealItem>('meals');
        this.mainRef = this.afStore.collection<MealItem>('meals', ref => {
            return ref.where('type', '==', 'main')
        });
        this.relishRef = this.afStore.collection<MealItem>('meals', ref => {
            return ref.where('type', '==', 'relish')
        });
        this.vegetableRef = this.afStore.collection<MealItem>('meals', ref => {
            return ref.where('type', '==', 'veg')
        });
        this.extrasRef = this.afStore.collection<MealItem>('meals', ref => {
            return ref.where('type', '==', 'extra')
        });
    }

    getMainItems(): Observable<MealItem[]> {
        return this.mainRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItem;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getRelishItems(): Observable<MealItem[]> {
        return this.relishRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItem;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getVegetableItems(): Observable<MealItem[]> {
        return this.vegetableRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItem;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    getExtrasItems(): Observable<MealItem[]> {
        return this.extrasRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as MealItem;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    saveMealItem(item: MealItem) {
        if (item.id) {
            return this.mealRef.doc(item.id).update(item);
        } else {
            return this.mealRef.add(Object.assign({}, item));
        }
    }
}
