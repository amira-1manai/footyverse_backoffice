import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGkStatsComponent } from './edit-gk-stats.component';

describe('EditGkStatsComponent', () => {
  let component: EditGkStatsComponent;
  let fixture: ComponentFixture<EditGkStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditGkStatsComponent]
    });
    fixture = TestBed.createComponent(EditGkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
