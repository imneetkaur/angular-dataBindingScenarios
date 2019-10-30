import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2compComponent } from './scenario2comp.component';

describe('Scenario2compComponent', () => {
  let component: Scenario2compComponent;
  let fixture: ComponentFixture<Scenario2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
