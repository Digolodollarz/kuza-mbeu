import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../app-services/models';
import {AccommodationService} from '../../app-services/accommodation.service';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs/Rx';

declare const $: any;

@Component({
    selector: 'app-edit-house',
    templateUrl: './edit-house.component.html',
    styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {

    @Input() house: House;
    updating = false;
    uploadProgress: Observable<number>;

    constructor(private accommodation: AccommodationService,
                private afStorage: AngularFireStorage) {
    }

    ngOnInit() {
        if (!this.house) {
            this.house = new House();
        } else {
            this.updating = true;
        }
    }

    save(item) {
        this.accommodation.saveHouse(item);
        console.log(item);
        $('#editHouseModal').modal('hide');
    }

    upload(event, name) {
        // const randomId = Math.random().toString(36).substring(2);
        const refPath = 'houses/' + name; //  + '/' + randomId;
        const ref = this.afStorage.ref(refPath);
        const task = ref.put(event.target.files[0]);
        this.uploadProgress = task.percentageChanges();
        task.then(() => {
            ref.getDownloadURL().subscribe(url => {
                this.house.imageUrl = url;
                this.house.imageRef = refPath;
            });
        });
    }

}
