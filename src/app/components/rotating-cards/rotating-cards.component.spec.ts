import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCardsComponent } from './rotating-cards.component';

describe('RotatingCardsComponent', () => {
  let component: RotatingCardsComponent;
  let fixture: ComponentFixture<RotatingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
