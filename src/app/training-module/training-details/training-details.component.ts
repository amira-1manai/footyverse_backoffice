import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/models/Training';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent {
  training: Training;

  constructor(
    private activatedRoute: ActivatedRoute,
    private trainingService: TrainingService,
  ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      this.trainingService.getTraining(params['id']).subscribe(
        (data: any) => {
          this.training = data;
          console.log('Training details fetched successfully:', data);
        }
      );
    });


    

  }


}
