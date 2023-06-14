import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiclosRoutingModule } from './ciclos-routing.module';
import { Ciclo2Component } from './components/ciclo2/ciclo2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Ciclo2Component,
  ],
  imports: [
    CommonModule,
    CiclosRoutingModule,
    FormsModule,

  ]
})
export class CiclosModule { }
