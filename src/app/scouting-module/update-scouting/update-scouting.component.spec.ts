import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScoutingComponent } from './update-scouting.component';

describe('UpdateScoutingComponent', () => {
  let component: UpdateScoutingComponent;
  let fixture: ComponentFixture<UpdateScoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateScoutingComponent]
    });
    fixture = TestBed.createComponent(UpdateScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
