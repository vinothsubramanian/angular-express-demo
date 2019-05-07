import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';

import { SecurityRoutingModule } from './security-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class SecurityModule { }