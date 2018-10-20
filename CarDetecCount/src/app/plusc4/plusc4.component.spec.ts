import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plusc4Component } from './plusc4.component';

describe('Plusc4Component', () => {
  let component: Plusc4Component;
  let fixture: ComponentFixture<Plusc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plusc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plusc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
