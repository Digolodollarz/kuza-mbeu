import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
} from '@angular/material';
import {ComingSoonComponent} from '../../coming-soon/coming-soon.component';
import {ComingSoonModule} from '../../coming-soon/coming-soon.module';
import {AccessDeniedComponent} from '../../access-denied/access-denied.component';
import {AccommodationComponent} from '../../app-services/accommodation/accommodation.component';
import {TransportComponent} from '../../app-services/transport/transport.component';
import {FoodComponent} from '../../app-services/food/food.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatInputModule,
        MatTooltipModule,
        ComingSoonModule,
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        AccessDeniedComponent,
        AccommodationComponent,
        FoodComponent,
        TransportComponent,
    ]
})

export class AdminLayoutModule {
}
