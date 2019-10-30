import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5comp2',
  templateUrl: './scenario5comp2.component.html',
  styleUrls: ['./scenario5comp2.component.css']
})
export class Scenario5comp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   public children="";
   public got_value=true;



  @Output() public childEvent1= new EventEmitter();
  public sendEvent(){
    // console.log("parent "+ this.children);
    this.childEvent1.emit(this.children);
  }
}
