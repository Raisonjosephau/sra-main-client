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
import { ToastrModule } from 'ngx-toastr';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth';
import {ReLoginGaurd } from './auth/auth.rev'
import {LoginService} from './_services/login.service'
import {UserService} from './_services/user.service'
import {JwtInterceptor} from './_helpers/jwt.interceptor'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxDatatableModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ], // add!
  providers: [
    AuthGuard,
    ReLoginGaurd,
  LoginService,
  UserService,
  {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
