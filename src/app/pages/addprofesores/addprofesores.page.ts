import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Profes } from '../../allVars';

@Component({
  selector: 'app-addprofesores',
  templateUrl: './addprofesores.page.html',
  styleUrls: ['./addprofesores.page.scss'],
})
export class AddprofesoresPage implements OnInit {

  constructor(public alertController: AlertController, private navCtrl: NavController) { }

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
              this.navCtrl.navigateBack('/profesores');
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
  name: string ="";
  description: string ="";
  correo: string ="";

  profesoresConfirmar()
  {

    Profes.nameProfe.push(this.name);
    Profes.claseProf.push(this.description);
    Profes.correo.push(this.correo);


  }
}
