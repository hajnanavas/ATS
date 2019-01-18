import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { StructureService } from '../shared/services/structure-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  providers: [StructureService]
})
export class PagesModule { }
