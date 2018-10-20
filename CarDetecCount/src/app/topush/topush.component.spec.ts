import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopushComponent } from './topush.component';

describe('TopushComponent', () => {
  let component: TopushComponent;
  let fixture: ComponentFixture<TopushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
