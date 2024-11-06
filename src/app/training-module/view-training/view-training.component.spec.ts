import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingComponent } from './view-training.component';

describe('ViewTrainingComponent', () => {
  let component: ViewTrainingComponent;
  let fixture: ComponentFixture<ViewTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTrainingComponent]
    });
    fixture = TestBed.createComponent(ViewTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
