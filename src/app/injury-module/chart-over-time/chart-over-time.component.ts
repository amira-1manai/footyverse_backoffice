import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { InjuryService } from 'src/app/services/injury.service';
import { Injury } from 'src/models/Injury';


@Component({
  selector: 'app-chart-over-time',
  templateUrl: './chart-over-time.component.html',
  styleUrls: ['./chart-over-time.component.css']
})

export class ChartOverTimeComponent implements OnInit {


  injuries: Injury[] = [];

  public barChartLabels: string[] = [];
  public barChartData: ChartData<'bar'> = {
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
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor( private injuryService: InjuryService) { }
  
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
      console.log(injuriesByMonth);
  
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