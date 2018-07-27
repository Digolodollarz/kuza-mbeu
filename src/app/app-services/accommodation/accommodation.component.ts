import {Component, OnInit} from '@angular/core';
import {House} from '../models';

@Component({
    selector: 'app-accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

    houses: House[];

    constructor() {
    }

    ngOnInit() {
        this.houses = [
            {tv: false, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 0.3, perRoom: 2, price: 80, rooms: 5, tiles: false, wifi: true},
            {tv: true, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 0.6, perRoom: 2, price: 75, rooms: 5, tiles: false, wifi: true},
            {tv: false, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 1.5, perRoom: 2, price: 65, rooms: 5, tiles: false, wifi: false},
            {tv: true, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 0.3, perRoom: 2, price: 90, rooms: 5, tiles: false, wifi: true},
            {tv: false, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 1.3, perRoom: 2, price: 65, rooms: 5, tiles: false, wifi: false},
            {tv: false, imageUrl: '', address: '12345 Example Street', street: 'Example', location: 'Example North', distance: 2.3, perRoom: 2, price: 80, rooms: 5, tiles: false, wifi: true},
        ];
    }


}
