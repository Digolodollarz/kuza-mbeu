import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealItemComponent } from './add-meal-item.component';

describe('AddMealItemComponent', () => {
  let component: AddMealItemComponent;
  let fixture: ComponentFixture<AddMealItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMealItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMealItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
