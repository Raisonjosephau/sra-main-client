import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ReLoginGaurd implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('logedUser')) {
            // logged in so return true
            this.router.navigate(['/dashboard']);

        } else {
            // not logged in so redirect to login page with the return url
            return true;
        }
    }
}
