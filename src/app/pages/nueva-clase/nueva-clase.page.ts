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
  
hora :string;
horaf :string;
clase:string;

<<<<<<< HEAD
=======

>>>>>>> 746514e3cc6c88b6f4c12f955a5e3a26ae688c18
Lanadir(){
  console.log(this);
  Clase.LhoraArr.push(this.hora);
  Clase.LhoraFArr.push(this.horaf);
  Clase.LclaseArr.push(this.clase);
  console.log(Clase.LclaseArr);
}
MAanadir(){
  console.log(this);
  Clase.MAhoraArr.push(this.hora);
  Clase.MAhoraFArr.push(this.horaf);
  Clase.MAclaseArr.push(this.clase);
  console.log(Clase.MAclaseArr);
}
MIanadir(){
  console.log(this);
  Clase.MIhoraArr.push(this.hora);
  Clase.MIhoraFArr.push(this.horaf);
  Clase.MIclaseArr.push(this.clase);
  console.log(Clase.MIclaseArr);
}
Janadir(){
  console.log(this);
  Clase.JhoraArr.push(this.hora);
  Clase.JhoraFArr.push(this.horaf);
  Clase.JclaseArr.push(this.clase);
  console.log(Clase.JclaseArr);
}
Vanadir(){
  console.log(this);
  Clase.VhoraArr.push(this.hora);
  Clase.VhoraFArr.push(this.horaf);
  Clase.VclaseArr.push(this.clase);
  console.log(Clase.VclaseArr);
}
}
