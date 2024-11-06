import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerPerformanceComponent } from './edit-player-performance.component';

describe('EditPlayerPerformanceComponent', () => {
  let component: EditPlayerPerformanceComponent;
  let fixture: ComponentFixture<EditPlayerPerformanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlayerPerformanceComponent]
    });
    fixture = TestBed.createComponent(EditPlayerPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
