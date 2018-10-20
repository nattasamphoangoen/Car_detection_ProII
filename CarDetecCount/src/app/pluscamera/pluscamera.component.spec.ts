import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluscameraComponent } from './pluscamera.component';

describe('PluscameraComponent', () => {
  let component: PluscameraComponent;
  let fixture: ComponentFixture<PluscameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluscameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluscameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
