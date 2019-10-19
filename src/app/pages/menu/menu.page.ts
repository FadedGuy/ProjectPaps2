import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { arrTareasString } from '../../allVars';

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

  constructor() {
    arrTareasString.tareaName.push("hola");
    arrTareasString.tareaName.push("hola1");
    arrTareasString.tareaName.push("hola2");
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
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
