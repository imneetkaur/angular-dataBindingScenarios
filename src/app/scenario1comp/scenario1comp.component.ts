import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1comp',
  templateUrl: './scenario1comp.component.html',
  styleUrls: ['./scenario1comp.component.css']
})
export class Scenario1compComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Scenario1 Printing on console
  public display(showValues){
    console.log(showValues.value);
  }

}
