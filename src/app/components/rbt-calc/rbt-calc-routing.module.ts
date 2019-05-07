import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RbtCalcComponent } from './rbt-calc/rbt-calc.component';

const rbtCalcRoutes: Routes = [
  {
    path: '',
    redirectTo: 'calc',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'calc',
        component: RbtCalcComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(rbtCalcRoutes)],
  exports: [RouterModule]
})
export class RBTCalcRoutingModule { }