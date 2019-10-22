import { Component, OnInit } from '@angular/core';
import {Clase} from '../../allVars';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-nueva-clase',
  templateUrl: './nueva-clase.page.html',
  styleUrls: ['./nueva-clase.page.scss'],
})
export class NuevaClasePage implements OnInit {
  constructor(public alertController: AlertController, private navCtrl: NavController) { 
   }
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
               this.navCtrl.navigateBack('/horario');
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
  ngOnInit() {
  }
colourL:string= 'primary';
colourMA:string= 'primary';
colourMI:string= 'primary';
colourJ:string= 'primary';
colourV:string= 'primary';
hora :string;
horaf :any;
clase:any;
guion: number = 0; 
data = "";
hour: string = "";
minute: string = "";
time: string = "";

hourf: string = "";
minutef: string = "";
timef: string = "";


Hora(hora)
{
  if(hora != ""){
    this.guion = 0;
    this.data = "";
    for(var i = 0; i < hora.length; i++){
      if(hora[i] == ':' || hora[i] == "T"){
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
        this.data += hora[i];
      }
    }
    //return hora=this.hour + ":" + this.minute;
    return (this.hour + ":" + this.minute);
  }
}

Horaf(horaf)
{
  if(horaf != ""){
    this.guion = 0;
    this.data = "";
    for(var i = 0; i < horaf.length; i++){
      if(horaf[i] == ':' || horaf[i] == "T"){
        this.guion++;
        switch(this.guion){
          case 2:
            this.hourf = this.data;
            break;
          case 3:
            this.minutef = this.data;
            break;
        }
        this.data = "";
      }
      else{
        this.data += horaf[i];
      }
    }
    //return hora=this.hour + ":" + this.minute;
    return (this.hourf + ":" + this.minutef);
  }
}

Lanadir(hora,horaf){
  this.colourL='secondary';
  console.log(this);
  Clase.LhoraArr.push(this.Hora(hora));
  Clase.LhoraFArr.push(this.Horaf(horaf));
  Clase.LclaseArr.push(this.clase);
  console.log(Clase.LclaseArr);
}
MAanadir(hora,horaf){
  this.colourMA='secondary';
  console.log(this);
  Clase.MAhoraArr.push(this.Hora(hora));
  Clase.MAhoraFArr.push(this.Horaf(horaf));
  Clase.MAclaseArr.push(this.clase);
  console.log(Clase.MAclaseArr);
}
MIanadir(hora,horaf){
  this.colourMI='secondary';
  console.log(this);
  Clase.MIhoraArr.push(this.Hora(hora));
  Clase.MIhoraFArr.push(this.Hora(horaf));
  Clase.MIclaseArr.push(this.clase);
  console.log(Clase.MIclaseArr);
}
Janadir(hora,horaf){
  this.colourJ='secondary';
  console.log(this);
  Clase.JhoraArr.push(this.Hora(hora));
  Clase.JhoraFArr.push(this.Hora(horaf));
  Clase.JclaseArr.push(this.clase);
  console.log(Clase.JclaseArr);
}
Vanadir(hora,horaf){
  this.colourV='secondary';
  console.log(this);
  Clase.VhoraArr.push(this.Hora(hora));
  Clase.VhoraFArr.push(this.Hora(horaf));
  Clase.VclaseArr.push(this.clase);
  console.log(Clase.VclaseArr);
}
}
