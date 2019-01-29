import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './core/header/header.component';
import { InfoWindowComponent } from './shared/components/info-window/info-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  entryComponents:[InfoWindowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
