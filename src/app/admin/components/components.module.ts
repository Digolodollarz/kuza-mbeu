import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashFooterComponent } from './footer/dash-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DashFooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    DashFooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
