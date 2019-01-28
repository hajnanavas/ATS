import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapsComponent } from './components/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [MapsComponent,HttpClientModule],
})
export class SharedModule { }
