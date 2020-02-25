import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnitzelOverviewComponent } from './schnitzel-overview.component';

describe('SchnitzelOverviewComponent', () => {
  let component: SchnitzelOverviewComponent;
  let fixture: ComponentFixture<SchnitzelOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchnitzelOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchnitzelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
