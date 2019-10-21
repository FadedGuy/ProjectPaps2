import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then(m => m.HorarioPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then(m => m.TareasPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule)
  },
  { path: 'profesores', 
  loadChildren: () => import('./pages/profesores/profesores.module').then(m => m.ProfesoresPageModule)
  },
  { path: 'addprofesores',
    loadChildren: () => import('./pages/addprofesores/addprofesores.module').then(m => m.AddprofesoresPageModule)
  },
  { path: 'show-tareas', 
    loadChildren: () => import('./show-tareas/show-tareas.module').then(m => m.ShowTareasPageModule)
  },
  { path: 'tareas-elim', 
    loadChildren: './pages/tareas-elim/tareas-elim.module#TareasElimPageModule' 
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
