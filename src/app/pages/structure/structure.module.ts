import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MapsComponent } from 'src/app/shared/components/maps/maps.component';

@NgModule({
  declarations: [StructureCreateComponent, StructureListComponent, MapsComponent],
  imports: [
    CommonModule,
    StructureRoutingModule,
    MatDialogModule
  ],
  entryComponents: [StructureCreateComponent]
})
export class StructureModule { }
