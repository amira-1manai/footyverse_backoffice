import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGkPerformanceComponent } from './add-gk-performance.component';

describe('AddGkPerformanceComponent', () => {
  let component: AddGkPerformanceComponent;
  let fixture: ComponentFixture<AddGkPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGkPerformanceComponent]
    });
    fixture = TestBed.createComponent(AddGkPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
