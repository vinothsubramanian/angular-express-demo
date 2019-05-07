import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbtCalcComponent } from './rbt-calc/rbt-calc.component';
import { RBTCalcRoutingModule } from './rbt-calc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RBTCalcRoutingModule
  ],
  declarations: [RbtCalcComponent]
})
export class RBTCalcModule { }