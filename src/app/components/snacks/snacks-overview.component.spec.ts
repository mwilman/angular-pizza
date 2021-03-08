import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnacksOverviewComponent } from './snacks-overview.component';

describe('SnacksComponent', () => {
  let component: SnacksOverviewComponent;
  let fixture: ComponentFixture<SnacksOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
