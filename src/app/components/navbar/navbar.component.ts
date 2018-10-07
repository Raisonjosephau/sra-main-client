import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';


import {CommonService} from '../../_services/common.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
    private listTitles: any[];
    $layer: any;
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public isCollapsed = true;
   
    
    searching = false;
    searchFailed = false;
    constructor(location: Location,  private element: ElementRef, private router: Router, private commonService: CommonService) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
        this.$layer = document.getElementsByClassName('close-layer')[0];
         if (this.$layer) {
           this.$layer.remove();
           this.mobile_menu_visible = 0;
         }
     });
    }

    collapse() {
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        const html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }

        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
          setTimeout(function() {
            if (mainPanel.style) {
              mainPanel.style.position = '';
            }
          }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const html = document.getElementsByTagName('html')[0];

        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove('nav-open');
            if (this.$layer) {
                this.$layer.remove();
            }
            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (html.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (html.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { // asign a function
              html.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            html.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle() {
      let titlee = this.location.prepareExternalUrl(this.location.path());
      if (titlee.charAt(0) === '#') {
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();
      return titlee;
    }
    logOut() {
        localStorage.removeItem('logedUser');
        this.router.navigate(['/login']);
    }

    search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => term.length < 3 ? []
        : this.commonService.serachStudent(term).pipe(
          tap(() => this.searchFailed = false),
          map(res => {
            if (res.length) {
              return res;
            } else {
              this.searchFailed = true;
              return [];
            }
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    )
  formatter = (x: {name: string,  regno: string}) => x.name + ' - ' + x.regno;
  private selectSearch(e: any): void {
    console.log(e);
  }
}
