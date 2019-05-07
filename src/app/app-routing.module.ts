import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'security',
  loadChildren: './components/security/security.module#SecurityModule'
},
{
  path: 'rbt',
  loadChildren: './components/rbt-calc/rbt-calc.module#RBTCalcModule'
},
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'security'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
