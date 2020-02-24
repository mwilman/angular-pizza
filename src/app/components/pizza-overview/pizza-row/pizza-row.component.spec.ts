import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRowComponent } from './pizza-row.component';

describe('PizzaRowComponent', () => {
  let component: PizzaRowComponent;
  let fixture: ComponentFixture<PizzaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
