import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

// Result
import {UploadResultComponent} from '../../result-upload/result-upload.component'
import {StudentResultComponent} from '../../student-result/student-result.componet'
import {ResultComponent} from '../../results/results.component'

// Analysis
import {SubjectResultComponent} from '../../subject-result/subject-result.component'
// Forms
import {FormsComponent} from '../../forms/forms.component'


import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {Filter} from '../../common-pipe';
import {ShowErrorsComponent } from '../../_helpers/show-error.component'
import { NouisliderModule } from 'ng2-nouislider';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    AngularMultiSelectModule,
    NouisliderModule
  ],
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    UploadResultComponent,
    StudentResultComponent,
    ResultComponent,
    SubjectResultComponent,
    FormsComponent,
    Filter,
    ShowErrorsComponent

  ]
})

export class AdminLayoutModule {}
