import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructureRoutingModule } from './structure-routing.module';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructureListComponent } from './structure-list/structure-list.component';
import { MatDialogModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { MatInputModule, MatSelectModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructureService } from 'src/app/shared/services/structure.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StructureCreateComponent, StructureListComponent],
  imports: [
    CommonModule,
    StructureRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [StructureCreateComponent],
  providers: [StructureService]
})
export class StructureModule { }
