import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {OverlayModule} from '@angular/cdk/overlay';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './admin/components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {TableListComponent} from './demo/table-list/table-list.component';
import {TypographyComponent} from './demo/typography/typography.component';
import {IconsComponent} from './demo/icons/icons.component';
import {MapsComponent} from './demo/maps/maps.component';
import {NotificationsComponent} from './demo/notifications/notifications.component';
import {UpgradeComponent} from './demo/upgrade/upgrade.component';
import {
    AgmCoreModule
} from '@agm/core';
import {AdminComponent} from './admin/admin.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ComingSoonComponent} from './admin/coming-soon/coming-soon.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {AccommodationComponent} from './app-services/accommodation/accommodation.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {HomeComponent} from './home/home.component';
import {FoodComponent} from './app-services/food/food.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {FooterComponent} from './components/footer/footer.component';
import {UserComponent} from './user/user.component';
import {MatButtonModule, MatInputModule, MatRippleModule, MatTooltipModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        OverlayModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
        AngularFireStorageModule,
        AngularFireAuthModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}), // imports firebase/auth, only needed for auth features,
    ],
    declarations: [
        AppComponent,
        AdminComponent,
        HomeComponent,
        AccommodationComponent,
        FoodComponent,
        RegisterComponent,
        LoginComponent,
        FooterComponent,
        UserComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
