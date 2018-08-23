import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/admin/accommodation', title: 'Accommodation',  icon:'home', class: '' },
    { path: '/admin/food', title: 'Food',  icon:'fastfood', class: '' },
    { path: '/admin/transport', title: 'Transport',  icon:'local_taxi', class: '' },
    { path: '/admin/entertainment', title: 'Entertainment',  icon:'local_movies', class: '' },
    { path: '/admin/printing', title: 'printing',  icon:'print', class: '' },
    { path: '/admin/store', title: 'store',  icon:'store', class: '' },
    { path: '/admin/groups', title: 'groups',  icon:'group', class: '' },
    { path: '/admin/source', title: 'source',  icon:'local_library', class: '' },
    { path: '/admin/adverts', title: 'adverts',  icon:'attach_money', class: '' },
    { path: '/admin/events', title: 'events',  icon:'event', class: '' },
    { path: '/admin/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/admin/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/admin/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/admin/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
