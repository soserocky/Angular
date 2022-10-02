import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/root/app.component';
import { Lab1Component } from './components/PropertyBinding_Interpolation_EventBinding/lab1/lab1.component';

@NgModule({
  declarations: [AppComponent, Lab1Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [
    //AppComponent,
    Lab1Component,
  ],
})
export class AppModule {}
