import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroDisplayComponent } from './euro-display.component';

describe('EuroDisplayComponent', () => {
  let component: EuroDisplayComponent;
  let fixture: ComponentFixture<EuroDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
