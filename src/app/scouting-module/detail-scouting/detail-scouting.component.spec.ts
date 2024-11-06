import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScoutingComponent } from './detail-scouting.component';

describe('DetailScoutingComponent', () => {
  let component: DetailScoutingComponent;
  let fixture: ComponentFixture<DetailScoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailScoutingComponent]
    });
    fixture = TestBed.createComponent(DetailScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
