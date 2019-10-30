import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenario4comp2',
  templateUrl: './scenario4comp2.component.html',
  styleUrls: ['./scenario4comp2.component.css']
})
export class Scenario4comp2Component implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  public manager="";
  @Output() public childEvent =new EventEmitter();

  fireEvent(){
    this.childEvent.emit(this.manager);
  }

}
