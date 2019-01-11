import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { MapsComponent } from 'src/app/shared/components/maps/maps.component';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
import { StructureService } from 'src/app/shared/services/structure-service';


@NgModule({
  declarations: [StructureCreateComponent, StructureListComponent, MapsComponent],
  imports: [
    CommonModule,
    StructureRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule, MatSlideToggleModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule
  ],
  entryComponents: [StructureCreateComponent],
  providers: [StructureService]
})
export class StructureModule { }
