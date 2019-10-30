import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4comp2Component } from './scenario4comp2.component';

describe('Scenario4comp2Component', () => {
  let component: Scenario4comp2Component;
  let fixture: ComponentFixture<Scenario4comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
