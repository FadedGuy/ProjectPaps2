import { Component, OnInit } from '@angular/core';
import { Profes } from '../../allVars';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {


  profess: any;
  materiass: any;
  correoss: any;
<<<<<<< HEAD
  allInfos:any;
=======

 


>>>>>>> 746514e3cc6c88b6f4c12f955a5e3a26ae688c18
  
  constructor()
  {
    this.profess = Profes.nameProfe;
    this.materiass = Profes.claseProf;
    this.correoss = Profes.correo;
<<<<<<< HEAD
    this.allInfos= Profes.allInfo;
=======



>>>>>>> 746514e3cc6c88b6f4c12f955a5e3a26ae688c18
   }




  ngOnInit() {
  }

}
