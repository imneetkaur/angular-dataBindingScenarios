import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5comp1Component } from './scenario5comp1.component';

describe('Scenario5comp1Component', () => {
  let component: Scenario5comp1Component;
  let fixture: ComponentFixture<Scenario5comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
