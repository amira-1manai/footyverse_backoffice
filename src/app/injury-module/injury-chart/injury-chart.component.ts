import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { InjuryService } from 'src/app/services/injury.service';
import { Injury } from 'src/models/Injury';

@Component({
  selector: 'app-injury-chart',
  templateUrl: './injury-chart.component.html',
  styleUrls: ['./injury-chart.component.css']
})
export class InjuryChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  injuries: Injury[] = [];

  constructor( private injuryService: InjuryService) { }
    
    /* injuries: Injury[] = [
    {
      _id: '1',
      date: '2022-01-01',
      player: 'John Doe',
      injuryType: 'Concussion',
      description: 'The player suffered a concussion during a collision with another player',
      treatment: 'Immediate medical attention',
      diagnosis: 'The player underwent a comprehensive evaluation, including neurological tests and imaging',
      doctor: 'Dr. Matthew Thompson',
      returnDate: '2022-01-15',
      time: 10
    },
    {
      _id: '2',
      date: '2022-02-01',
      player: 'Jane Smith',
      injuryType: 'Fractured Arm',
      description: 'The player sustained a fractured arm during a fall',
      treatment: 'The player\'s arm was immobilized using a cast',
      diagnosis: 'X-rays.',
      doctor: 'Dr. Emily Johnson',
      returnDate: '2022-03-15',
      time: 10
    },
    {
      _id: '3',
      date: '2022-03-01',
      player: 'Mike Johnson',
      injuryType: 'Sprained Ankle',
      description: 'The player sprained his ankle while running',
      treatment: 'RICE (Rest, Ice, Compression, Elevation)',
      diagnosis: 'Physical examination',
      doctor: 'Dr. Sarah Davis',
      returnDate: '2022-03-10',
      time: 7
    },
    {
      _id: '4',
      date: '2022-04-01',
      player: 'Lisa Brown',
      injuryType: 'Knee Ligament Tear',
      description: 'The player tore her knee ligament during a game',
      treatment: 'Surgery and physical therapy',
      diagnosis: 'MRI scan',
      doctor: 'Dr. Michael Wilson',
      returnDate: '2022-09-01',
      time: 30
    },
    {
      _id: '7',
      date: '2022-07-15',
      player: 'David Wilson',
      injuryType: 'Hamstring Strain',
      description: 'The player suffered a strain in his hamstring during sprinting',
      treatment: 'Rest, ice, compression, and physical therapy',
      diagnosis: 'Physical examination and MRI scan',
      doctor: 'Dr. Sarah Davis',
      returnDate: '2022-08-15',
      time: 31
    },
    {
      _id: '8',
      date: '2022-08-01',
      player: 'Michelle Thompson',
      injuryType: 'Ankle Fracture',
      description: 'The player sustained a fracture in her ankle during a game',
      treatment: 'Surgery and immobilization with a cast',
      diagnosis: 'X-rays and CT scan',
      doctor: 'Dr. Emily Johnson',
      returnDate: '2022-09-30',
      time: 60
    },
    {
      _id: '9',
      date: '2022-09-15',
      player: 'Christopher Davis',
      injuryType: 'Shoulder Impingement',
      description: 'The player developed shoulder impingement due to repetitive throwing',
      treatment: 'Physiotherapy, anti-inflammatory medication, and modified activity',
      diagnosis: 'Physical examination and MRI scan',
      doctor: 'Dr. Michael Wilson',
      returnDate: '2022-10-31',
      time: 46
    },
    {
      _id: '10',
      date: '2022-10-01',
      player: 'Melissa Johnson',
      injuryType: 'ACL Tear',
      description: 'The player tore her anterior cruciate ligament (ACL) during a match',
      treatment: 'Surgery followed by extensive rehabilitation',
      diagnosis: 'MRI scan and physical examination',
      doctor: 'Dr. Sarah Davis',
      returnDate: '2023-03-01',
      time: 152
    },
    {
      _id: '11',
      date: '2022-11-15',
      player: 'Ryan Thompson',
      injuryType: 'Concussion',
      description: 'The player suffered a concussion after a collision with another player',
      treatment: 'Rest, cognitive rest, and gradual return to activity',
      diagnosis: 'Clinical evaluation and neurological tests',
      doctor: 'Dr. Emily Johnson',
      returnDate: '2022-12-15',
      time: 31
    },
    {
      _id: '12',
      date: '2022-12-01',
      player: 'Samantha Davis',
      injuryType: 'Stress Fracture',
      description: 'The player developed a stress fracture in her foot due to overuse',
      treatment: 'Rest, immobilization, and gradual return to activity',
      diagnosis: 'Physical examination and imaging (X-rays, MRI)',
      doctor: 'Dr. Michael Wilson',
      returnDate: '2023-02-01',
      time: 62
    },
    {
      _id: '13',
      date: '2023-01-15',
      player: 'Daniel Wilson',
      injuryType: 'Groin Strain',
      description: 'The player suffered a strain in his groin during a match',
      treatment: 'Rest, ice, compression, and physical therapy',
      diagnosis: 'Physical examination and imaging (ultrasound)',
      doctor: 'Dr. Sarah Davis',
      returnDate: '2023-02-28',
      time: 44
    },
    {
      _id: '14',
      date: '2023-02-01',
      player: 'Emily Thompson',
      injuryType: 'Ankle Sprain',
      description: 'The player sprained her ankle during a training session',
      treatment: 'RICE (Rest, Ice, Compression, Elevation) and physical therapy',
      diagnosis: 'Physical examination and imaging (X-rays)',
      doctor: 'Dr. Emily Johnson',
      returnDate: '2023-03-15',
      time: 42
    },
    {
      _id: '15',
      date: '2023-03-15',
      player: 'Andrew Davis',
      injuryType: 'Tennis Elbow',
      description: 'The player developed tennis elbow due to repetitive motions',
      treatment: 'Rest, physical therapy, and modified activity',
      diagnosis: 'Physical examination and medical history',
      doctor: 'Dr. Michael Wilson',
      returnDate: '2023-04-30',
      time: 46
    }
  ];  */

  injuryTypes: string[] = [];
  averageTimes: number[] = [];

  ngOnInit(): void {
  
    this.injuryService.getInjuries().subscribe((injuries) => {
      this.injuries = injuries;
      console.log(this.injuries);
      this.calculateInjuryStats();
    });
    
  }

  ngAfterViewInit(): void {
    Chart.register(...registerables);

    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context for chart canvas.');
      return;
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.injuryTypes,
        datasets: [
          {
            label: 'Injury Time (in days)',
            data: this.averageTimes,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
              borderColor: 'rgba(0, 0, 0, 0.1)',
            },
            ticks: {
              font: {
                size: 12,
                weight: 'bold',
              },
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                weight: 'bold',
              },
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: {
              size: 14,
              weight: 'bold',
            },
            bodyFont: {
              size: 12,
            },
            callbacks: {
              label: function (context: any) {
                const datasetLabel = context.dataset.label || '';
                const value = context.parsed.y || 0;
                return datasetLabel + ': ' + value + ' days';
              },
            },
          },
        },
        animation: {
          duration: 1000,
        },
      },
    });
  }

  private calculateInjuryStats(): void {
    const injuryTypeMap: { [key: string]: { count: number; total: number } } = {};

    for (const injury of this.injuries) {
      if (injuryTypeMap.hasOwnProperty(injury.injuryType)) {
        injuryTypeMap[injury.injuryType].count++;
        injuryTypeMap[injury.injuryType].total += injury.time;
      } else {
        injuryTypeMap[injury.injuryType] = {
          count: 1,
          total: injury.time,
        };
      }
    }

    for (const [injuryType, stats] of Object.entries(injuryTypeMap)) {
      this.injuryTypes.push(injuryType);
      this.averageTimes.push(stats.total / stats.count);
    }
  }
}


