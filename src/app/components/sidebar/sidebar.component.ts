import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' },
];

export const RESULTROUTES: RouteInfo[] = [

    { path: '/results', title: 'Results',  icon: 'education_paper', class: '' },
    { path: '/student-result', title: 'Student Result',  icon: 'education_hat', class: '' },
    { path: '/upload-result', title: 'Upload Result',  icon: 'arrows-1_cloud-upload-94', class: '' }
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  resultMenuItems: any[];
  currentRoute: string;
  collapseState: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.resultMenuItems = RESULTROUTES.filter(menuItem => menuItem);
    this.checkRouteIsInResult();
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  getUser() {
        const localData  = localStorage.getItem('userDetails');
        if (localData) {
            const user  = JSON.parse(localData)
            return user.f_name + ' ' + user.l_name
        } else {
            return 'SRS'
        }
  }
  checkRouteIsInResult() {
        const collpase = {'area' : false, 'show': ''};
        const router = this.router;
        this.resultMenuItems.filter(function(item) {
            if (item.path === router.url) {
                collpase.area = true;
                collpase.show = 'show';
            }
        })
        this.collapseState = collpase;
  }
}
