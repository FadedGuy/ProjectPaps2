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

 


  
  constructor()
  {
    this.profess = Profes.nameProfe;
    this.materiass = Profes.claseProf;
    this.correoss = Profes.correo;



   }




  ngOnInit() {
  }

}
