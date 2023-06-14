import { Component,OnDestroy,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclo1',
  templateUrl: './ciclo1.component.html',
  styleUrls: ['./ciclo1.component.css']
})
export class Ciclo1Component implements OnInit, OnDestroy {
 constructor(private router: Router){

  console.log('Constructor: Defino todos los objetos y variables que necesito para el llenado de datos');

 }

  cambiar(){
  this.router.navigate(['/alterna']);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy: Me desconecto');
    //throw new Error('Ha ocurrido un error en OnDestroy');
  }
  ngOnInit(): void {
    console.log('OnInit: llamo los objetos y variables que cree en el constructor');
    //throw new Error('Ha ocurrido un error en OnInit');
  }

  navegar(){
  this.router.navigate(['/alterna']);
  }



}
