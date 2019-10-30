import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scenario6comp2',
  templateUrl: './scenario6comp2.component.html',
  styleUrls: ['./scenario6comp2.component.css']
})
export class Scenario6comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public message="";

  @Output() public childEvent = new EventEmitter();

  sendEvent(){
    this.childEvent.emit(this.message);
  }
}
