import { Component, OnInit } from '@angular/core';
import { Tareas, arrTareas, arrTareasString } from '../../allVars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  router: Router;

  name: string;
  description: string;
  date: string = "";
  time: string = "";

  guion = 0; 
  data = "";

  tareaAux: Tareas;

  constructor() { }

  ngOnInit() {
  }

  tareasConfirmar(){
    //Obtiene los valores del dia, mes y año separados
    if(this.date != ""){
      for(var i = 0; i < this.date.length; i++){
        if(this.date[i] == '-' || this.date[i] == 'T'){
          this.guion++;
          switch(this.guion){
            case 1:
              this.tareaAux.anio = this.data;
              break;
            case 2:
              this.tareaAux.mes = this.data;
              break;
            case 3:
              this.tareaAux.dia = this.data;
              break;
          }
          this.data = "";
        }
        else{
          this.data += this.date[i];
        }
      }
  
    } else{
      console.log("No se ha ingresado fecha de entrega");
    }
    
    if(this.time != ""){
      this.guion = 0;
      this.data = "";
      for(var i = 0; i < this.time.length; i++){
        if(this.time[i] == ':' || this.time[i] == "T"){
          this.guion++;
          switch(this.guion){
            case 2:
              this.tareaAux.hora = this.data;
              break;
            case 3:
              this.tareaAux.minuto = this.data;
              break;
          }
          this.data = "";
        }
        else{
          this.data += this.time[i];
        }
      }
  
    }
    else{
      console.log("No se ha ingresado fecha de entrega");
    }


    alert("Se ha registrado la tarea " + this.name + " de manera exitosa!");

    arrTareasString.tareaName.push(this.name);
    console.log(arrTareasString.tareaName);

    //De alguna manera deberia de regresarte a la pagina de tareas pero paso de hacerlo
  }

}
