import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {UploadResultComponent} from '../../result-upload/result-upload.component'
import {StudentResultComponent} from '../../student-result/student-result.componet'
import { AuthGuard} from '../../auth'

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'table-list',     component: TableListComponent, canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuard] },
    { path: 'upload-result',     component: UploadResultComponent, canActivate: [AuthGuard] },
    { path: 'student-result',     component: UploadResultComponent, canActivate: [AuthGuard] },
];
