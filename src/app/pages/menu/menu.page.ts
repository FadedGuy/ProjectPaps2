import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';



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
  public items: Array <{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Tarea ' + i,
        note: 'Descripcion de la tarea ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
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
