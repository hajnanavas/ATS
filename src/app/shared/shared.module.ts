import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapsComponent } from './components/maps/maps.component';
import { InfoWindowComponent } from './components/info-window/info-window.component';

@NgModule({
  declarations: [MapsComponent, InfoWindowComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MapsComponent],
  entryComponents: [InfoWindowComponent]
})
export class SharedModule { }
