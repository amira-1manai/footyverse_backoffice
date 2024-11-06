import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryChartComponent } from './injury-chart.component';

describe('InjuryChartComponent', () => {
  let component: InjuryChartComponent;
  let fixture: ComponentFixture<InjuryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjuryChartComponent]
    });
    fixture = TestBed.createComponent(InjuryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
