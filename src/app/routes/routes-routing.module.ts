import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '@env/environment';

import {AdminLayoutComponent} from '../theme/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from '../theme/auth-layout/auth-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './sessions/login/login.component';
import {RegisterComponent} from './sessions/register/register.component';
import {AuthGuard} from '@core';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {title: 'Dashboard', titleI18n: 'dashboard'},
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: {title: 'Sessions', titleI18n: 'Sessions'},
      },
      {path: 'testmodul', loadChildren: () => import('./testmodul/testmodul.module').then(m => m.TestmodulModule)},
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
        data: {title: 'Design', titleI18n: 'design'},
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
        data: {title: 'Material', titleI18n: 'material'},
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
        data: {title: 'Forms', titleI18n: 'forms'},
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
        data: { title: 'Tables', titleI18n: 'tables' },
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login', titleI18n: 'Login' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'Register' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
