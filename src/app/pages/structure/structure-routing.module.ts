import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureListComponent } from './structure-list/structure-list.component';

const routes: Routes = [{
  path: 'structures',
  children: [
    { path: 'list', component: StructureListComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
  ]
  },
  { path: '', redirectTo: 'structures', pathMatch: 'full' },
  { path: '**', redirectTo: 'structures', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructureRoutingModule { }
