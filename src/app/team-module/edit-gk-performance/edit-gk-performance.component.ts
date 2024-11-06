import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-edit-gk-performance',
  templateUrl: './edit-gk-performance.component.html',
  styleUrls: ['./edit-gk-performance.component.css']
})
export class EditGkPerformanceComponent {

  editGkPerformanceForm: FormGroup = new FormGroup({
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

  editedGkStats: any;
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

      this.statsService.getStatByPlayerId(this.idPlayer).subscribe((response) => {
        this.editedGkStats = response;
        console.log('editedGkStats:', this.editedGkStats);


        this.editGkPerformanceForm = new FormGroup({
          weakness: new FormControl(this.editedGkStats.weakness),
          strength: new FormControl(this.editedGkStats.strength),
          matchesPlayed: new FormControl(this.editedGkStats.matchesPlayed),
          fouls: new FormControl(this.editedGkStats.fouls),
          penaltiesCommitted: new FormControl(this.editedGkStats.penaltiesCommitted),
          minutes: new FormControl(this.editedGkStats.minutes),
          yellowCards: new FormControl(this.editedGkStats.yellowCards),
          redCards: new FormControl(this.editedGkStats.redCards),
          keepSaves: new FormControl(this.editedGkStats.keepSaves),
          peenalitiesSaved: new FormControl(this.editedGkStats.penaltiesSaved)
        });
      }
      );  

    });

 
  }

  onSubmit(): void {
    
    
    const formData = this.editGkPerformanceForm.value;

    this.editedGkStats.player = this.idPlayer;
    Object.assign(this.editedGkStats, formData);

    this.statsService.updateStat(this.editedGkStats).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/team/player-details', this.idPlayer]);
    }
    );
      
  }
}
