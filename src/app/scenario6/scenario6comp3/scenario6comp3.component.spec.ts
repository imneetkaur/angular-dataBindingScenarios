import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6comp3Component } from './scenario6comp3.component';

describe('Scenario6comp3Component', () => {
  let component: Scenario6comp3Component;
  let fixture: ComponentFixture<Scenario6comp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6comp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
