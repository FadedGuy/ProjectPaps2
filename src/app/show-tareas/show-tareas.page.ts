import { Component, OnInit } from '@angular/core';
import { Tareas, arrTareas, arrTareasString } from '../allVars';

@Component({
  selector: 'app-show-tareas',
  templateUrl: './show-tareas.page.html',
  styleUrls: ['./show-tareas.page.scss'],
})
export class ShowTareasPage implements OnInit {
  name = arrTareasString.tareaName[arrTareasString.indexSel];
  descripcion = arrTareasString.descripcionTareas[arrTareasString.indexSel];
  dia = arrTareasString.dia[arrTareasString.indexSel];
  mes = arrTareasString.mes[arrTareasString.indexSel];
  anio = arrTareasString.anio[arrTareasString.indexSel];
  hora = arrTareasString.hora[arrTareasString.indexSel];
  minuto = arrTareasString.minuto[arrTareasString.indexSel];
  
  constructor() { }

  ngOnInit() {
  }

}
