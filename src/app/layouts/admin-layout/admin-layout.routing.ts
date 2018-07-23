import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {ComingSoonComponent} from '../../coming-soon/coming-soon.component';
import {AdminGuard} from '../../admin.guard';
import {AccessDeniedComponent} from '../../access-denied/access-denied.component';
import {AccommodationComponent} from '../../app-sevices/accommodation/accommodation.component';
import {FoodComponent} from '../../app-services/food/food.component';
import {TransportComponent} from '../../app-services/transport/transport.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'accommodation', component: AccommodationComponent},
    {path: 'food', component: FoodComponent},
    {path: 'laundry', component: ComingSoonComponent},
    {path: 'transport', component: TransportComponent},
    {path: 'entertainment', component: ComingSoonComponent},
    {path: 'printing', component: ComingSoonComponent},
    {path: 'store', component: ComingSoonComponent},
    {path: 'groups', component: ComingSoonComponent},
    {path: 'events', component: ComingSoonComponent},
    {path: 'source', component: ComingSoonComponent},
    {path: 'adverts', component: ComingSoonComponent},
    {path: 'access-denied', component: AccessDeniedComponent},
    {path: '', redirectTo: 'user-profile'}
];
