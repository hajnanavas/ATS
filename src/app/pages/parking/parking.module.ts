import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParkingRoutingModule } from './parking-routing.module';
import { StructureListComponent } from './structure/structure-list/structure-list.component';
import { StructureComponent } from './structure/structure.component';
import { StructureCreateComponent } from './structure/structure-create/structure-create.component';
import { MapsComponent } from 'src/app/common/components/maps/maps.component';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule, MatInputModule, MatSelectModule } from '@angular/material';

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
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [StructureCreateComponent]
})
export class ParkingModule { }
