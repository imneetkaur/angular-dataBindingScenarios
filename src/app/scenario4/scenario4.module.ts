import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4comp1Component } from './scenario4comp1/scenario4comp1.component';
import { Scenario4comp2Component } from './scenario4comp2/scenario4comp2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Scenario4comp1Component, Scenario4comp2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario4comp1Component,
    Scenario4comp2Component
  ]
})
export class Scenario4Module { }
