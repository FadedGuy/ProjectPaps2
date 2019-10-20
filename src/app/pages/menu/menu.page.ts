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
  i: number = 0;

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
  
  hola(){
    arrTareasString.indexSel = 0;
    //0 En este caso pero deberia de ser el index de la opcion seleccionada
    this.navCtrl.navigateBack('/show-tareas');
  }
}
