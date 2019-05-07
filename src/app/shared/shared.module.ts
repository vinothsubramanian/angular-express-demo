import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';

const sharedComponents = [HeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    FormlyModule.forRoot(), FormlyMaterialModule,
    MaterialModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule, FormlyModule, FormlyMaterialModule, MaterialModule, ...sharedComponents],
  declarations: [...sharedComponents]
})
export class SharedModule { }