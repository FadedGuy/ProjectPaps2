import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevaClasePage } from './nueva-clase.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaClasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevaClasePage]
})
export class NuevaClasePageModule {}
