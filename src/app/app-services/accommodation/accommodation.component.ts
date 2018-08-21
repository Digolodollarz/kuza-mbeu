import {Component, OnInit} from '@angular/core';
import {House} from '../models';
import {AccommodationService} from '../accommodation.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'app-accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

    houses: Observable<House[]>;

    constructor(private acc: AccommodationService) {
    }

    ngOnInit() {
        this.houses = this.acc.getHouses()
    }


}
