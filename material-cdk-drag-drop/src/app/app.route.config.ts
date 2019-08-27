import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  {
    path: 'drag-drop',
    component: DragDropComponent
  },
  {
    path: '**',
    redirectTo: 'drag-drop',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRouteConfig {}
