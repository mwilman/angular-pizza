import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PastaOverviewComponent } from './pasta-overview.component';

describe('PastaOverviewComponent', () => {
  let component: PastaOverviewComponent;
  let fixture: ComponentFixture<PastaOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
