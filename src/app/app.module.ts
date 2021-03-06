import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

//Plugins for toast and Progress bar 
import { ToastrModule } from 'ngx-toastr';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor'

// Services and helpers
import { AuthGuard } from './auth';
import {ReLoginGaurd } from './auth/auth.rev'
//Services
import {LoginService} from './_services/login.service'
import {PaginationService} from './_services/pagination.service'

import {ServerService} from './_services/server.service'
import {CommonService} from './_services/common.service'
import {DashboardService} from './_services/dashboard.service'
import {FormService} from './_services/form.service'
import {ResultService} from './_services/result.service'
import {StudentService} from './_services/student.service'
import {SubjectService} from './_services/subject.service'


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    NgProgressModule.forRoot({
      spinnerPosition: 'right',
      color: '#18ce0f',
      thick: false
    }),
    NgProgressHttpModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ], // add!
  providers: [
    AuthGuard,
    ReLoginGaurd,
    PaginationService,
    LoginService,
    ServerService,
    CommonService,
    DashboardService,
    FormService,
    ResultService,
    SubjectService,
    StudentService,
    {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
    },
    CommonService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
