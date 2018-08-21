import {Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {TableListComponent} from '../demo/table-list/table-list.component';
import {TypographyComponent} from '../demo/typography/typography.component';
import {IconsComponent} from '../demo/icons/icons.component';
import {MapsComponent} from '../demo/maps/maps.component';
import {NotificationsComponent} from '../demo/notifications/notifications.component';
import {UpgradeComponent} from '../demo/upgrade/upgrade.component';
import {ComingSoonComponent} from './coming-soon/coming-soon.component';
import {AdminGuard} from '../admin.guard';
import {AccessDeniedComponent} from '../access-denied/access-denied.component';
import {AccommodationComponent} from '../app-services/accommodation/accommodation.component';
import {FoodComponent} from '../app-services/food/food.component';
import {TransportComponent} from '../app-services/transport/transport.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {AddMealItemComponent} from './add-meal-item/add-meal-item.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'accommodation', component: EditHouseComponent},
    {path: 'food', component: AddMealItemComponent},
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
    {path: '', redirectTo: 'dashboard'}
];
