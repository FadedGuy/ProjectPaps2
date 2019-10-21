import { Component, OnInit, ViewChild } from '@angular/core';
import {Clase} from '../../allVars';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  Litems: any;
  MAitems: any;
  MIitems: any;
  Jitems:any;
  Vitems: any;
  LHitems: any;
  MAHitems: any;
  MIHitems: any;
  JHitems:any;
  VHitems: any;
  constructor() { 
    this.Litems = Clase.LclaseArr;
    this.MAitems = Clase.MAclaseArr;
    this.MIitems = Clase.MIclaseArr;
    this.Jitems = Clase.JclaseArr;
    this.Vitems = Clase.VclaseArr;

    this.LHitems = Clase.LhoraArr;
    this.MAHitems = Clase.MAhoraArr;
    this.MIHitems = Clase.MIhoraArr;
    this.JHitems = Clase.JhoraArr;
    this.VHitems = Clase.VhoraArr;
  }

  ngOnInit() {
  }

}


