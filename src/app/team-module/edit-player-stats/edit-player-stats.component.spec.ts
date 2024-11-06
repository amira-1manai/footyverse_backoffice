import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlayerStatsComponent } from './edit-player-stats.component';

describe('EditPlayerStatsComponent', () => {
  let component: EditPlayerStatsComponent;
  let fixture: ComponentFixture<EditPlayerStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPlayerStatsComponent]
    });
    fixture = TestBed.createComponent(EditPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
