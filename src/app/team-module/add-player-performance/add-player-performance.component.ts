import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-add-player-performance',
  templateUrl: './add-player-performance.component.html',
  styleUrls: ['./add-player-performance.component.css']
})
export class AddPlayerPerformanceComponent {

  addPlayerPerformanceForm: FormGroup;
  addedPlayerStats: any;
  idPlayer: string;


  constructor(
    private statsService: StatsService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.idPlayer = params['idPlayer'];
      console.log('idPlayer: ', this.idPlayer);
    });


    this.addPlayerPerformanceForm = new FormGroup({
      weakness: new FormControl(),
      strength: new FormControl(),
      matchesPlayed: new FormControl(),
      fouls: new FormControl(),
      penaltiesCommitted: new FormControl(),
      minutes: new FormControl(),
      yellowCards: new FormControl(),
      redCards: new FormControl(),
      interceptions: new FormControl(),
      tackles: new FormControl(),
      possessionWon: new FormControl(),
      ballsRecovered: new FormControl(),
      goals: new FormControl(),
      assists: new FormControl(),
      shotsOnTarget: new FormControl(),
      passesCompleted: new FormControl()
    });
  }

  onSubmit(): void {
    this.addedPlayerStats = this.addPlayerPerformanceForm.value;
    this.addedPlayerStats.player = this.idPlayer;
    console.log('addedGkStats:', this.addedPlayerStats);
    this.statsService.addStat(this.addedPlayerStats).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/team/player-details', this.idPlayer]);
    }
    );
  }

}