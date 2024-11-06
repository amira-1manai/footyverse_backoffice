import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuryDetailsComponent } from './injury-details.component';

describe('InjuryDetailsComponent', () => {
  let component: InjuryDetailsComponent;
  let fixture: ComponentFixture<InjuryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InjuryDetailsComponent]
    });
    fixture = TestBed.createComponent(InjuryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
