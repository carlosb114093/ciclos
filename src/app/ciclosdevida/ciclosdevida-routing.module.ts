import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ciclo1Component } from './components/ciclo1/ciclo1.component';

const routes: Routes = [
  {
    path:'',
    component: Ciclo1Component
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiclosdevidaRoutingModule { }
