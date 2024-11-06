import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteScoutingComponent } from './delete-scouting.component';

describe('DeleteScoutingComponent', () => {
  let component: DeleteScoutingComponent;
  let fixture: ComponentFixture<DeleteScoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteScoutingComponent]
    });
    fixture = TestBed.createComponent(DeleteScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
