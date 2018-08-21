import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireStorage} from 'angularfire2/storage';
import {House} from './models';
import {Observable} from 'rxjs/Rx';
import {map} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class AccommodationService {

    private houseRef;

    constructor(private afStore: AngularFirestore,
                private afStorage: AngularFireStorage) {
        this.houseRef = this.afStore.collection<House>('houses');
    }

    getHouses(): Observable<House[]> {
        return this.houseRef
            .snapshotChanges().pipe(map((actions: any) => {
                return actions.map(action => {
                    const data = action.payload.doc.data() as House;
                    const id = action.payload.doc.id;
                    return {id, ...data}
                })
            }));
    }

    saveHouse(item: House) {
        if (item.id) {
            return this.houseRef.doc(item.id).update(JSON.parse(JSON.stringify(item)));
        } else {
            return this.houseRef.add(JSON.parse(JSON.stringify(item)));
        }
    }
}
