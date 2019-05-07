
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [MatButtonModule, MatCardModule, MatToolbarModule];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [...materialModules],
  declarations: []
})
export class MaterialModule { }