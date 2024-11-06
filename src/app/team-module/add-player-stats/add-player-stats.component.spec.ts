import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayerStatsComponent } from './add-player-stats.component';

describe('AddPlayerStatsComponent', () => {
  let component: AddPlayerStatsComponent;
  let fixture: ComponentFixture<AddPlayerStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayerStatsComponent]
    });
    fixture = TestBed.createComponent(AddPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
