import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {
    path: 'structure',
    component: StructureComponent,
    children: [
      { path: 'list', component: StructureListComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'structure', pathMatch: 'full' },
  { path: '**', redirectTo: 'structure', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
