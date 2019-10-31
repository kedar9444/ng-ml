import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMovingLettersComponent } from './ng-moving-letters.component';

describe('NgMovingLettersComponent', () => {
  let component: NgMovingLettersComponent;
  let fixture: ComponentFixture<NgMovingLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMovingLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMovingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
