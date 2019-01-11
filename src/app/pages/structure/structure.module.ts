import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { MapsComponent } from 'src/app/shared/components/maps/maps.component';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructureService } from 'src/app/shared/services/structure-service';

@NgModule({
  declarations: [StructureCreateComponent, StructureListComponent,MapsComponent],
  imports: [
    CommonModule,
    StructureRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule, MatSlideToggleModule, MatInputModule, MatSelectModule,
    MatAutocompleteModule,
    FormsModule, ReactiveFormsModule 
  ],
  entryComponents: [StructureCreateComponent],
  providers: [StructureService]
})
export class StructureModule { }
