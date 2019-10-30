import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6comp2Component } from './scenario6comp2.component';

describe('Scenario6comp2Component', () => {
  let component: Scenario6comp2Component;
  let fixture: ComponentFixture<Scenario6comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
