import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScoutingComponent } from './view-scouting.component';

describe('ViewScoutingComponent', () => {
  let component: ViewScoutingComponent;
  let fixture: ComponentFixture<ViewScoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewScoutingComponent]
    });
    fixture = TestBed.createComponent(ViewScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
