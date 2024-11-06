import { Component } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { Training } from 'src/models/Training';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.css']
})
export class ViewTrainingComponent {

  displayedColumns: string[] = ['Description', 'Date', 'Duration', 'TrainingType', 'Training details'];
  dataSource: Training[] = [];

  constructor(
    private trainingService: TrainingService,
  ) { }

  ngOnInit(): void {
    this.trainingService.getTrainings().subscribe(
      (trainings: Training[]) => {
        console.log('Trainings fetched successfully:', trainings);
        this.dataSource = trainings;

        console.log("dataSource: ", this.dataSource);
      }
    );
  }
}
