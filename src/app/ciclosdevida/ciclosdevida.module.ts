import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiclosdevidaRoutingModule } from './ciclosdevida-routing.module';
import { Ciclo1Component } from './components/ciclo1/ciclo1.component';


@NgModule({
  declarations: [
    Ciclo1Component
  ],
  imports: [
    CommonModule,
    CiclosdevidaRoutingModule
  ],
  exports: [
    Ciclo1Component
  ],
})
export class CiclosdevidaModule { }
