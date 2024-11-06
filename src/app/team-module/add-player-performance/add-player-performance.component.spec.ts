import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerPerformanceComponent } from './add-player-performance.component';

describe('AddPlayerPerformanceComponent', () => {
  let component: AddPlayerPerformanceComponent;
  let fixture: ComponentFixture<AddPlayerPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayerPerformanceComponent]
    });
    fixture = TestBed.createComponent(AddPlayerPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
