import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/root/app.component';
import { Lab1Component } from './components/PropertyBinding_Interpolation_EventBinding/lab1/lab1.component';
import { FormsModule } from '@angular/forms';
import { Lab2Component } from './components/Directives/PropertyDirectives/lab2/lab2.component';
import { Lab3Component } from './components/Directives/StructuralDirectives/lab3/lab3.component';
import { Lab4Component } from './components/Passing_Data/lab4/lab4.component';
import { Lab5Component } from './components/Passing_Data/lab5/lab5.component';

@NgModule({
  declarations: [AppComponent, Lab1Component, Lab2Component, Lab3Component, Lab4Component, Lab5Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [
    //AppComponent,
    //Lab1Component,
    //Lab2Component,
    //Lab3Component,
    Lab4Component
  ],
})
export class AppModule {}
