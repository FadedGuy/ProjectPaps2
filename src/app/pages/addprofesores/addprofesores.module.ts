import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddprofesoresPage } from './addprofesores.page';

const routes: Routes = [
  {
    path: '',
    component: AddprofesoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddprofesoresPage]
})
export class AddprofesoresPageModule {}
