import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5comp1Component } from './scenario5comp1/scenario5comp1.component';
import { Scenario5comp2Component } from './scenario5comp2/scenario5comp2.component';
import { Scenario5comp3Component } from './scenario5comp3/scenario5comp3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Scenario5comp1Component, Scenario5comp2Component, Scenario5comp3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario5comp1Component,
    Scenario5comp2Component,
    Scenario5comp3Component
  ]
})
export class Scenario5Module { }
