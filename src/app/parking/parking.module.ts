import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';

@NgModule({
  declarations: [StructureListComponent, StructureComponent],
  imports: [
    CommonModule,
    ParkingRoutingModule
  ]
})
export class ParkingModule { }
