import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';


@NgModule({
  declarations: [AppComponent, FirstComponentComponent, ParentDataComponent],
  imports: [
    CommonModule, BrowserModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
