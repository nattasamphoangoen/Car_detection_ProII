import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plusc2Component } from './plusc2.component';

describe('Plusc2Component', () => {
  let component: Plusc2Component;
  let fixture: ComponentFixture<Plusc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plusc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plusc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
