import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGkPerformanceComponent } from './edit-gk-performance.component';

describe('EditGkPerformanceComponent', () => {
  let component: EditGkPerformanceComponent;
  let fixture: ComponentFixture<EditGkPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGkPerformanceComponent]
    });
    fixture = TestBed.createComponent(EditGkPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
