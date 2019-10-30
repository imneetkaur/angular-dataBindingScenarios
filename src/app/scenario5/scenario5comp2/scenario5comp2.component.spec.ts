import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5comp2Component } from './scenario5comp2.component';

describe('Scenario5comp2Component', () => {
  let component: Scenario5comp2Component;
  let fixture: ComponentFixture<Scenario5comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
