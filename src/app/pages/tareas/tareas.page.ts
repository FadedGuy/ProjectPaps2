import { Component, OnInit } from '@angular/core';
import { Tareas, arrTareas, arrTareasString } from '../../allVars';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  constructor(public alertController: AlertController, private navCtrl: NavController ) { }
  presionado: boolean;

  async presentAlert() {
    const alert = await this.alertController.create({

      header: 'Alerta',
      subHeader: 'Volver',
      message: '¿Seguro que desea volver sin guardar cambios?',
      buttons: [
        {
            text: 'OK',
            handler: () => {
              console.log('Confirm OK');
              this.presionado = true;
              this.navCtrl.navigateBack('/menu');
            }
          },{
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.presionado = false;
            }
          }
      ]
    });
    

    await alert.present();

    

  }




  router: Router;

  name: string = "";
  description: string;
  date: string = "";
  time: string = "";

  guion = 0; 
  data = "";

  day: string = "";
  month: string = "";
  year: string = "";
  hour: string = "";
  minute: string = "";

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
    
    //De alguna manera deberia de regresarte a la pagina de tareas pero paso de hacerlo
  }

}
