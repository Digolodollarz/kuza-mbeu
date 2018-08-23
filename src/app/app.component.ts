import {Component, OnInit} from '@angular/core';
import {AuthService} from './user-profile/auth.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(public auth: AuthService) {
    }

    public ngOnInit() {
        // this.auth.afUser.subscribe(user => {})
    }
}
