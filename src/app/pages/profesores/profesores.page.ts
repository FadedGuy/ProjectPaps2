import { Component, OnInit } from '@angular/core';
import { Profes } from '../../allVars';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {

  profess: any;
  materiass: any;
  correoss: any;
  allInfos:any;

  constructor(private navCtrl: NavController)
  {
    this.profess = Profes.nameProfe;
    this.materiass = Profes.claseProf;
    this.correoss = Profes.correo;
    this.allInfos= Profes.allInfo;
   }

  ngOnInit() {
  }

  resetProfesores(){
    Profes.nameProfe = [];
    Profes.claseProf = [];
    Profes.correo = [];
    Profes.allInfo = [];
    this.navCtrl.navigateRoot("/home");
  }
}
