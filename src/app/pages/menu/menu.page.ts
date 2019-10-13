
import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'modal-page',
})
export class ModalPage {
  constructor(public modalController: ModalController) {

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,

    });
    return await modal.present();
  }

}

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
  public items: Array_Tareas <{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 4; i++) {
      this.items.push({
        title: 'Tarea ' + i,
        note: 'Descripcion de la tarea ' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  showAdd()
  {

  }

   addhw ()
  {
    this.items.push({
      title: 'Prueba boton add',
      note: 'Ver que detecte el click' ,
      icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    });
    
  };

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
