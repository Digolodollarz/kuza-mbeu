import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/accommodation', title: 'Accommodation',  icon:'home', class: '' },
    { path: '/food', title: 'Food',  icon:'fastfood', class: '' },
    { path: '/transport', title: 'Transport',  icon:'local_taxi', class: '' },
    { path: '/entertainment', title: 'Entertainment',  icon:'local_movies', class: '' },
    { path: '/printing', title: 'printing',  icon:'print', class: '' },
    { path: '/store', title: 'store',  icon:'store', class: '' },
    { path: '/groups', title: 'groups',  icon:'group', class: '' },
    { path: '/source', title: 'source',  icon:'local_library', class: '' },
    { path: '/adverts', title: 'adverts',  icon:'attach_money', class: '' },
    { path: '/events', title: 'events',  icon:'event', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
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
