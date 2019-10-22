import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { arrTareasString, Tareas } from '../../allVars';
import { RouterLink } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss']
})
export class MenuPage implements OnInit {
  private selectedItem: any;
  private icons = 
  [
    'calendar',
    'time',
    'clipboard'
  ];

  items: any;
  i: number;

  constructor(private navCtrl: NavController) {
    this.items = arrTareasString.tareaName;
  }
  openModal()
  {
    
  }
  showAdd()
  {

  }

  openTareas ()
  {
    console.log("add tarea click");
  };

  ngOnInit() {
  }
  
  hola(index){
    arrTareasString.indexSel = index;
    //0 En este caso pero deberia de ser el index de la opcion seleccionada
    this.navCtrl.navigateRoot('/show-tareas');
  }

  clickDel(index){
    /*arrTareasString.tareaName = arrTareasString.tareaName.splice(index, 1);
    console.log(arrTareasString.tareaName);*/
    let lenghtmenos = arrTareasString.tareaName.length-1;

    let auxName: string = arrTareasString.tareaName[index];
    let auxDescripcion: string = arrTareasString.descripcionTareas[index];
    let auxDia: string = arrTareasString.dia[index];
    let auxMes: string = arrTareasString.mes[index];
    let auxAnio: string = arrTareasString.anio[index];
    let auxHora: string = arrTareasString.hora[index];
    let auxMinuto: string = arrTareasString.minuto[index];

    arrTareasString.tareaName[index] = arrTareasString.tareaName[lenghtmenos];  
    arrTareasString.descripcionTareas[index] = arrTareasString.descripcionTareas[lenghtmenos];
    arrTareasString.dia[index] = arrTareasString.dia[lenghtmenos];
    arrTareasString.mes[index] = arrTareasString.mes[lenghtmenos];
    arrTareasString.anio[index] = arrTareasString.anio[lenghtmenos];
    arrTareasString.hora[index] = arrTareasString.hora[lenghtmenos];
    arrTareasString.minuto[index] = arrTareasString.minuto[lenghtmenos];

    arrTareasString.tareaName[lenghtmenos] = auxName;
    arrTareasString.descripcionTareas[lenghtmenos] = auxDescripcion;
    arrTareasString.dia[lenghtmenos] = auxDia;
    arrTareasString.mes[lenghtmenos] = auxMes;
    arrTareasString.anio[lenghtmenos] = auxAnio;
    arrTareasString.hora[lenghtmenos] = auxHora;
    arrTareasString.minuto[lenghtmenos] = auxMinuto;

    arrTareasString.tareaName.pop();
    arrTareasString.descripcionTareas.pop();   
    arrTareasString.mes.pop();
    arrTareasString.dia.pop();
    arrTareasString.anio.pop();
    arrTareasString.hora.pop();
    arrTareasString.minuto.pop();
  }
}
