import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuCategoryTableComponent } from './menu-category-table.component';

describe('MenuTableComponent', () => {
  let component: MenuCategoryTableComponent;
  let fixture: ComponentFixture<MenuCategoryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCategoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
