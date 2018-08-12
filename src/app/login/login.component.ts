import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LoginService } from '../_services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    path: any;
    test: Date = new Date();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService,
        private toastr: ToastrService
    ) {}
    authenitcate(username: string, password: string) {

        const router = this.router;
        if (username && password) {
            this.loginService.login(username, password).subscribe(
                data => {
                    if (this.path) {
                        this.router.navigate([this.path]);
                    } else {
                        router.navigate(['/dashboard']);
                    }
                },
                error => {
                    const errMsg = Object.keys(error.error).map(function (key) { return error.error[key]; });

                    this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span><b>Authenication Failed</b> : ' + errMsg, '', {
                      timeOut: 3500,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: 'alert alert-danger alert-with-icon',
                      positionClass: 'toast-' + 'top' + '-' +  'right'
                    });
                }
            );
        }
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            const path = params['returnUrl'];
            this.path = path;
        });
    }
}
