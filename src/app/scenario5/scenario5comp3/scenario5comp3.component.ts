import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5comp3',
  templateUrl: './scenario5comp3.component.html',
  styleUrls: ['./scenario5comp3.component.css']
})
export class Scenario5comp3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public children="";
  @Output() public childEvent= new EventEmitter();
  
  public sendEvent(){
    // console.log("grandChild"+this.children);
    this.childEvent.emit(this.children);

  }
}
