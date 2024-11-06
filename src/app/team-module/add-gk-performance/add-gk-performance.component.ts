import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-add-gk-performance',
  templateUrl: './add-gk-performance.component.html',
  styleUrls: ['./add-gk-performance.component.css']
})
export class AddGkPerformanceComponent {

  addGkPerformanceForm: FormGroup;
  addedGkStats: any;
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

    this.addGkPerformanceForm = new FormGroup({
      weakness: new FormControl(),
      strength: new FormControl(),
      matchesPlayed: new FormControl(),
      fouls: new FormControl(),
      penaltiesCommitted: new FormControl(),
      minutes: new FormControl(),
      yellowCards: new FormControl(),
      redCards: new FormControl(),
      keepSaves: new FormControl(),
      peenalitiesSaved: new FormControl()
    });


  }

  onSubmit(): void {

    this.addedGkStats = this.addGkPerformanceForm.value;
    this.addedGkStats.player = this.idPlayer;
    console.log('addedGkStats:', this.addedGkStats);
    this.statsService.addStat(this.addedGkStats).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/team/player-details', this.idPlayer]);

    }
    );
  }
}
