import { Component, OnInit } from '@angular/core';
import {Clase} from '../../allVars';
@Component({
  selector: 'app-nueva-clase',
  templateUrl: './nueva-clase.page.html',
  styleUrls: ['./nueva-clase.page.scss'],
})
export class NuevaClasePage implements OnInit {
  constructor() { 
   }

  ngOnInit() {
  }

  clase: any;
  hora: any;

Lanadir(){
  console.log(this);
  Clase.LhoraArr.push(this.hora);
  Clase.LclaseArr.push(this.clase);
  console.log(Clase.LclaseArr);
}
MAanadir(){
  console.log(this);
  Clase.MAhoraArr.push(this.hora);
  Clase.MAclaseArr.push(this.clase);
  console.log(Clase.MAclaseArr);
}
MIanadir(){
  console.log(this);
  Clase.MIhoraArr.push(this.hora);
  Clase.MIclaseArr.push(this.clase);
  console.log(Clase.MIclaseArr);
}
Janadir(){
  console.log(this);
  Clase.JhoraArr.push(this.hora);
  Clase.JclaseArr.push(this.clase);
  console.log(Clase.JclaseArr);
}
Vanadir(){
  console.log(this);
  Clase.VhoraArr.push(this.hora);
  Clase.VclaseArr.push(this.clase);
  console.log(Clase.VclaseArr);
}
}
