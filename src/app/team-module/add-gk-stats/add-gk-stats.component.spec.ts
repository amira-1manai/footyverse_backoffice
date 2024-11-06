import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGkStatsComponent } from './add-gk-stats.component';

describe('AddGkStatsComponent', () => {
  let component: AddGkStatsComponent;
  let fixture: ComponentFixture<AddGkStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGkStatsComponent]
    });
    fixture = TestBed.createComponent(AddGkStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
