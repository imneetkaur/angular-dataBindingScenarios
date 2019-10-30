import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6comp3',
  templateUrl: './scenario6comp3.component.html',
  styleUrls: ['./scenario6comp3.component.css']
})
export class Scenario6comp3Component implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  @Input('parentData') public message;

}
