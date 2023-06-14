import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path:'',
   loadChildren: ()=> import('./ciclosdevida/ciclosdevida.module').then(m=>m.CiclosdevidaModule)
  },
  {
  path:'alterna',
   loadChildren: ()=> import('./ciclos/ciclos.module').then(m=>m.CiclosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
