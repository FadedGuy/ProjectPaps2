import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoeProfesoresPage } from './shoe-profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ShoeProfesoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShoeProfesoresPage]
})
export class ShoeProfesoresPageModule {}
