import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { InjuryService } from 'src/app/services/injury.service';
import { UserServiceService } from 'src/app/services/service/user-service.service';
import { TrainingService } from 'src/app/services/training.service';
import { Injury } from 'src/models/Injury';
import { Training } from 'src/models/Training';
import { User } from 'src/models/User';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class AppDashboardComponent {
  
  users!: User[];
  nbrPayers:  number = 0;
  nbrCoaches: number= 0 ;
  nbrMedicalStaff:number = 0;
  nbrTechnicalDirector: number = 0;
  nbrTrainer: number = 0;

  injuries: Injury[] = [];
  trainings: Training[] = [];

  public barChartLabels: string[] = [];
  public barChartLabels2: string[] = [];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: []
  };
  public barChartData2: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: []
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
    scales: {
      x: {
        display: true,
        grid: {
          display: false
        }
      },
      y: {
        display: true,
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = true;


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) chart2: BaseChartDirective | undefined;

  constructor( private injuryService: InjuryService, private userService: UserServiceService ,
    private trainingService: TrainingService,
     private router: Router) { }
  
  ngOnInit() {
    this.injuryService.getInjuries().subscribe((injuries) => {
      this.injuries = injuries;
      console.log(this.injuries);
  
      // Group injuries by month
      const injuriesByMonth: { [key: string]: string[] } = {};
      if (injuries.length === 0) {
        return;
      }
      injuries.forEach(injury => {
        const month = injury.date.substring(0, 7);
        if (!injuriesByMonth[month]) {
          injuriesByMonth[month] = [];
        }
        injuriesByMonth[month].push(injury.injuryType);
      });
      console.log("injuriesByMonth",injuriesByMonth);
  
      // Create chart labels and data
      this.barChartLabels = Object.keys(injuriesByMonth);
      this.barChartData.labels = this.barChartLabels;
      this.barChartData.datasets = [{
        data: this.barChartLabels.map(label => injuriesByMonth[label].length),
        backgroundColor: this.barChartLabels.map(label => this.getRandomColor())
      }];
  
      // Update chart
      this.chart?.update();
  
      // Log the chart labels and data
      console.log("barChartLabels : ", this.barChartLabels);
      console.log("barChartData : ", this.barChartData);
    });


// Fetch trainings data from the training service (assuming trainingService exists)

    this.trainingService.getTrainings().subscribe((data : any) => {
      this.trainings = data;
        // Store the retrieved training data in the 'trainings' property

      console.log("thisss:",this.trainings);// Optional for debugging

      // Only proceed if there's actual training data

      // Group trainings by month
      const trainingsByMonth: { [key: string]: string[] } = {};
      if (this.trainings.length === 0) {
        return;
      }
        // Initialize an empty object to store trainings grouped by month
  // Iterate through each training record

      this.trainings.forEach(training => {
            // Extract the month string in YYYY-MM format (adjust if format differs)

        const month = training.date.substring(0, 7);
            // Create an empty array for the month's trainings if it doesn't exist yet

        if (!trainingsByMonth[month]) {
          trainingsByMonth[month] = [];
        }    // Add the training type to the corresponding month's array

        trainingsByMonth[month].push(training.trainingType);
      });
      console.log("trainingsByMonth",trainingsByMonth);
        // Extract month labels from the grouped data

      this.barChartLabels2 = Object.keys(trainingsByMonth);
        // Update the chart labels

      this.barChartData2.labels = this.barChartLabels2;
        // Prepare chart data: count training types per month

      this.barChartData2.datasets = [{
        data: this.barChartLabels2.map(label => trainingsByMonth[label].length),
        backgroundColor: this.barChartLabels2.map(label => this.getRandomColor())
      }];
  // Update the chart (assuming chart2 is a Chart.js instance)

      this.chart2?.update();

      console.log("barChartLabels2 : ", this.barChartLabels2);
      console.log("barChartData2 : ", this.barChartData2);
    });
    




    this.userService.getUsers().subscribe((users : any) => {
      this.users = users;
      console.log(this.users);
      this.users.forEach(user => {
        if(user.Role == "Player"){
          this.nbrPayers++;
        }
        if(user.Role == "Coach"){
          this.nbrCoaches++;
        }
        if(user.Role == "Medical Staff"){
          this.nbrMedicalStaff++;
        }
        if(user.Role == "Technical Director"){
          this.nbrTechnicalDirector++;
        }
        if(user.Role == "Trainer"){
          this.nbrTrainer++;
        }
      });
    });
  }
  

  // Generate a random color
  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public chartHovered({ event, active }: { event: ChartEvent; active: object[] }): void {
    console.log(event, active);
  }
}
