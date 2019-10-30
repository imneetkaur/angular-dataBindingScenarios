import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4comp1Component } from './scenario4comp1.component';

describe('Scenario4comp1Component', () => {
  let component: Scenario4comp1Component;
  let fixture: ComponentFixture<Scenario4comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
