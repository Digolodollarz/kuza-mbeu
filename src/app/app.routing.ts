import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {AccommodationComponent} from './app-services/accommodation/accommodation.component';
import {FoodComponent} from './app-services/food/food.component';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {UserComponent} from './user/user.component';
import {AdminGuard} from './admin.guard';

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
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'profile',
        component: UserComponent
    }, {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard],
        canActivateChild: [AdminGuard],
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
