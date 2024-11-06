import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScoutingComponent } from './add-scouting.component';

describe('AddScoutingComponent', () => {
  let component: AddScoutingComponent;
  let fixture: ComponentFixture<AddScoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddScoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddScoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
