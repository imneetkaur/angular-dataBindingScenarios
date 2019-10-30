import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5comp3Component } from './scenario5comp3.component';

describe('Scenario5comp3Component', () => {
  let component: Scenario5comp3Component;
  let fixture: ComponentFixture<Scenario5comp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5comp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
