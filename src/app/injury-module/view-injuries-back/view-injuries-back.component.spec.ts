import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInjuriesBackComponent } from './view-injuries-back.component';

describe('ViewInjuriesBackComponent', () => {
  let component: ViewInjuriesBackComponent;
  let fixture: ComponentFixture<ViewInjuriesBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInjuriesBackComponent]
    });
    fixture = TestBed.createComponent(ViewInjuriesBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
