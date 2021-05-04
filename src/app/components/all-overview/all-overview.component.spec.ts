import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOverviewComponent } from './all-overview.component';

describe('AllOverviewComponent', () => {
  let component: AllOverviewComponent;
  let fixture: ComponentFixture<AllOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
