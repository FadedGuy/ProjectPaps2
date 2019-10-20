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

  name: string = "";
  description: string;
  date: string = "";
  time: string = "";

  day: string = "";
  month: string = "";
  year: string = "";
  hour: string = "";
  minute: string = "";

  guion = 0; 
  data = "";


  confirmMessage: boolean;

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
              this.year = this.data;
              break;
            case 2:
              this.month = this.data;
              break;
            case 3:
              this.day = this.data;
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
              this.hour = this.data;
              break;
            case 3:
              this.minute = this.data;
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
    arrTareasString.descripcionTareas.push(this.description);
    arrTareasString.dia.push(this.day);
    arrTareasString.mes.push(this.month);
    arrTareasString.anio.push(this.year);
    arrTareasString.hora.push(this.hour);
    arrTareasString.minuto.push(this.minute);

    console.log(arrTareasString.tareaName);
    console.log(arrTareasString.hora);
    }

  tareasReturn(){
    if(this.name != ""){
      this.confirmMessage = confirm("Estas seguro que quieres salir, tu progreso no se guardara");
      if(this.confirmMessage){
        //OK, regresar
      }
      else{
        //Quedarse
      }
    }
  }
}
