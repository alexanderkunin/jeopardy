import { Routes } from '@angular/router';
import { QuestionGridComponent } from './question-grid/question-grid.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: QuestionGridComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'denied', component: PermissionDeniedComponent },
  // { path: 'forgotPassword', component: ForgotPasswordComponent },
  // { path: 'invoices', canActivate: [AuthGuard, PermissionsGuard], component: InvoicesComponent },

  // {
  //   path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], children: [
  //     { path: '', redirectTo: 'status', pathMatch: 'full' },
  //     { path: 'status', component: OrderStatusInfoComponent },
  //     { path: 'history', component: OrderHistoryComponent },
  //     { path: 'quotes', component: QuotesComponent },
  //   ]
  // },
  // {
  //   path: 'dashboards', component: DashboardsComponent, canActivate: [AuthGuard], children: [
  //     { path: '', redirectTo: 'mainDashboard', pathMatch: 'full' },
  //     { path: 'mainDashboard', component: MainDashboardComponent },
  //     { path: 'accountingDashboard', canActivate: [PermissionsGuard], component: AccountingDashboardComponent },
  //   ]
  // },
  // {
  //   path: 'admin', component: AdministrationComponent, canActivate: [AuthGuard, PermissionsGuard], children: [
  //     { path: '', redirectTo: 'users', pathMatch: 'full' },
  //     { path: 'users', component: UsersViewerComponent },
  //     { path: 'adduser', component: AddUserComponent },
  //   ]
  // },
  // {
  //   path: 'services', component: WorkOrdersComponent, canActivate: [AuthGuard, PermissionsGuard], children: [
  //     { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
  //     { path: 'upcoming', component: UpcomingServicesComponent },
  //     { path: 'request', component: ServiceRequestComponent },
  //   ]
  // },
  { path: '**', redirectTo: '/main' }
];
