import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServerService} from '../../_services/server.service'

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' }
];

export const RESULTROUTES: RouteInfo[] = [

    { path: '/forms', title: 'Forms',  icon: 'files_box', class: '' },
    { path: '/results', title: 'Results',  icon: 'education_paper', class: '' },
    { path: '/student-result', title: 'Student Result',  icon: 'education_hat', class: '' },
    { path: '/subject-analysis', title: 'Subject Analysis',  icon: 'education_paper', class: '' },
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
  analysisMenuItems: any[];
  currentRoute: string;
  collapseResultState: any;
  collapseAnalysisState: any;

  constructor(private router: Router, private serverService: ServerService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.resultMenuItems = RESULTROUTES.filter(menuItem => menuItem);
    if (!localStorage.getItem('batches')) {
        this.serverService.getBatches().subscribe(
          data => {
            localStorage.setItem('batches', JSON.stringify(data))
          },
          error => {
              console.log(error.status);
          }
        )
      }
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
}
