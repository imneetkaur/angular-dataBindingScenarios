import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1compComponent } from './scenario1comp.component';

describe('Scenario1compComponent', () => {
  let component: Scenario1compComponent;
  let fixture: ComponentFixture<Scenario1compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario1compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
