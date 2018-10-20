import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plusc3Component } from './plusc3.component';

describe('Plusc3Component', () => {
  let component: Plusc3Component;
  let fixture: ComponentFixture<Plusc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plusc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plusc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
