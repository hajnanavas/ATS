import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingRoutingModule } from './parking-routing.module';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';
import { StructureCreateComponent } from './structure/structure-create/structure-create.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [StructureListComponent, StructureComponent,StructureCreateComponent],
  imports: [
    CommonModule,
    ParkingRoutingModule,
    MatDialogModule
  ],
  entryComponents: [StructureCreateComponent]
})
export class ParkingModule { }
