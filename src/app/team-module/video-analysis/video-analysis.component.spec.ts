import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAnalysisComponent } from './video-analysis.component';

describe('VideoAnalysisComponent', () => {
  let component: VideoAnalysisComponent;
  let fixture: ComponentFixture<VideoAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoAnalysisComponent]
    });
    fixture = TestBed.createComponent(VideoAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
