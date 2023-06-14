import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ciclo2Component } from './components/ciclo2/ciclo2.component';

const routes: Routes = [
  {
    path:'',
    component: Ciclo2Component
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiclosRoutingModule { }
