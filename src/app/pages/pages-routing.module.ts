import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'parking', loadChildren: './parking/parking.module#ParkingModule' },
{ path: '', redirectTo: 'parking', pathMatch: 'full' },
{ path: '**', redirectTo: 'parking', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
