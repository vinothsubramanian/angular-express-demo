import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const securityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
       {
        path: 'logout',
        component: LogoutComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(securityRoutes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }