import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import {MatInputModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule, MatInputModule,MatFormFieldModule, MatIconModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule
  ],
  exports: [MapsComponent]
})
export class SharedModule { }
