import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  {
    path: 'structures',
    component: StructureComponent,
    children: [
      { path: 'list', component: StructureListComponent },
      // { path: 'create', component: StructureCreateComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'structures', pathMatch: 'full' },
  { path: '**', redirectTo: 'structures', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingRoutingModule { }
