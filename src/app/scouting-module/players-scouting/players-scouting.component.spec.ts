import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersScoutingComponent } from './players-scouting.component';

describe('PlayersScoutingComponent', () => {
  let component: PlayersScoutingComponent;
  let fixture: ComponentFixture<PlayersScoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersScoutingComponent]
    });
    fixture = TestBed.createComponent(PlayersScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
