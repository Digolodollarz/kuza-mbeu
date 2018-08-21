import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {AccommodationComponent} from './app-services/accommodation/accommodation.component';
import {FoodComponent} from './app-services/food/food.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }, {
        path: 'accommodation',
        component: AccommodationComponent
    }, {
        path: 'food',
        component: FoodComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                loadChildren: './admin/admin.module#AdminModule'
            }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
