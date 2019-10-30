import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario6comp1Component } from './scenario6comp1/scenario6comp1.component';
import { Scenario6comp2Component } from './scenario6comp2/scenario6comp2.component';
import { Scenario6comp3Component } from './scenario6comp3/scenario6comp3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Scenario6comp1Component, Scenario6comp2Component, Scenario6comp3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario6comp1Component,
    Scenario6comp2Component,
    Scenario6comp3Component
  ]
})
export class Scenario6Module { }
