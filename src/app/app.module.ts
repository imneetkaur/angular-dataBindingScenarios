import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For Scenario 2
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Scenario1compComponent } from './scenario1comp/scenario1comp.component';
import { Scenario2compComponent } from './scenario2comp/scenario2comp.component';
import { Scenario3Module } from './scenario3/scenario3.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Scenario4Module } from './scenario4/scenario4.module';
import { Scenario5Module } from './scenario5/scenario5.module';
import { Scenario6Module } from './scenario6/scenario6.module';


@NgModule({
  declarations: [
    AppComponent,
    Scenario1compComponent,
    Scenario2compComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Scenario3Module,
    BrowserAnimationsModule,
    Scenario4Module,
    Scenario5Module,
    Scenario6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
