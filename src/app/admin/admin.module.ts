import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin.routing';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {TableListComponent} from '../demo/table-list/table-list.component';
import {TypographyComponent} from '../demo/typography/typography.component';
import {IconsComponent} from '../demo/icons/icons.component';
import {MapsComponent} from '../demo/maps/maps.component';
import {NotificationsComponent} from '../demo/notifications/notifications.component';
import {UpgradeComponent} from '../demo/upgrade/upgrade.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
} from '@angular/material';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {ComingSoonModule} from './coming-soon/coming-soon.module';
import {AccessDeniedComponent} from '../access-denied/access-denied.component';
import {AccommodationComponent} from '../app-services/accommodation/accommodation.component';
import {TransportComponent} from '../app-services/transport/transport.component';
import {FoodComponent} from '../app-services/food/food.component';
import {AddMealItemComponent} from './add-meal-item/add-meal-item.component';
import {EditHouseComponent} from './edit-house/edit-house.component';

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
        TransportComponent,
        AddMealItemComponent,
        EditHouseComponent,
    ]
})

export class AdminModule {
}
