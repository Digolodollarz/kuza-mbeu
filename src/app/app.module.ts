import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {OverlayModule} from '@angular/cdk/overlay';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { AccommodationComponent } from './app-sevices/accommodation/accommodation.component';
import { FoodComponent } from './app-services/food/food.component';
import { TransportComponent } from './app-services/transport/transport.component';

const firebaseConfig = {
    apiKey: 'AIzaSyBc2e0lZhomB6Zw2gunPZUPhQkV0Balq_8',
    authDomain: 'kuza-mbeu.firebaseapp.com',
    databaseURL: 'https://kuza-mbeu.firebaseio.com',
    projectId: 'kuza-mbeu',
    storageBucket: 'kuza-mbeu.appspot.com',
    messagingSenderId: '36140092042'
};

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        OverlayModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), // imports firebase/auth, only needed for auth features,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
