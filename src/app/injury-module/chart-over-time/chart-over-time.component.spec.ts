import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOverTimeComponent } from './chart-over-time.component';

describe('ChartOverTimeComponent', () => {
  let component: ChartOverTimeComponent;
  let fixture: ComponentFixture<ChartOverTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartOverTimeComponent]
    });
    fixture = TestBed.createComponent(ChartOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
