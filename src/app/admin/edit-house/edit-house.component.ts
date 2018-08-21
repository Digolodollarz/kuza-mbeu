import {Component, Input, OnInit} from '@angular/core';
import {House} from '../../app-services/models';
import {AccommodationService} from '../../app-services/accommodation.service';

declare const $: any;

@Component({
    selector: 'app-edit-house',
    templateUrl: './edit-house.component.html',
    styleUrls: ['./edit-house.component.scss']
})
export class EditHouseComponent implements OnInit {

    @Input() house: House;
    updating = false;

    constructor(private accommodation: AccommodationService) {
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

}
