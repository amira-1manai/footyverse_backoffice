import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamBackComponent } from './view-team-back.component';

describe('ViewTeamBackComponent', () => {
  let component: ViewTeamBackComponent;
  let fixture: ComponentFixture<ViewTeamBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTeamBackComponent]
    });
    fixture = TestBed.createComponent(ViewTeamBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
