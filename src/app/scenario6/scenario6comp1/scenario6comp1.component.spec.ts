import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6comp1Component } from './scenario6comp1.component';

describe('Scenario6comp1Component', () => {
  let component: Scenario6comp1Component;
  let fixture: ComponentFixture<Scenario6comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
