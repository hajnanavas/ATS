import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingRoutingModule } from './parking-routing.module';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';
import { StructureCreateComponent } from './structure/structure-create/structure-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MapsComponent } from 'src/app/common/components/maps/maps.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    StructureListComponent,
    StructureComponent,
    StructureCreateComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
    ParkingRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  entryComponents: [StructureCreateComponent]
})
export class ParkingModule { }
