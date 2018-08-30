import { Routes } from '@angular/router';

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

// _helper
import { AuthGuard} from '../../auth'

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuard] },

    // Result
    { path: 'upload-result',     component: UploadResultComponent, canActivate: [AuthGuard] },
    { path: 'student-result',     component: StudentResultComponent, canActivate: [AuthGuard] },
    { path: 'results',     component: ResultComponent, canActivate: [AuthGuard] },

    // Analysis
    { path: 'subject-analysis',  component: SubjectResultComponent, canActivate: [AuthGuard] },

    // Forms
    { path: 'forms',  component: FormsComponent, canActivate: [AuthGuard] }
];
