import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dash-footer',
    templateUrl: './dash-footer.component.html',
    styleUrls: ['./dash-footer.component.css']
})
export class DashFooterComponent implements OnInit {
    test: Date = new Date();

    constructor() {
    }

    ngOnInit() {
    }

}
