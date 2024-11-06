import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-add-gk-stats',
  templateUrl: './add-gk-stats.component.html',
  styleUrls: ['./add-gk-stats.component.css']
})
export class AddGkStatsComponent {

  addGkStatsForm: FormGroup = new FormGroup({
    saves: new FormControl(),
    aerialAbility: new FormControl(),
    anticipation: new FormControl(),
    ballHandling: new FormControl(),
    tackling: new FormControl()
  });
  addedGkStats: any;
  idPlayer: string;


  constructor(
    private statsService: StatsService,
    private activatedRoute: ActivatedRoute,
    private router : Router

  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log('params: ', params['idPlayer']);
      this.idPlayer = params['idPlayer'];
    });

    this.addGkStatsForm = new FormGroup({
      player: new FormControl(),
      saves: new FormControl(),
      aerialAbility: new FormControl(),
      anticipation: new FormControl(),
      ballHandling: new FormControl(),
      tackling: new FormControl()
    });
  }

  onSubmit(): void {
    console.log('Form:', this.addGkStatsForm.value);
    this.addedGkStats = this.addGkStatsForm.value;
    this.addedGkStats.player = this.idPlayer;
    this.statsService.addGkStat(this.addedGkStats).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/team/player-details/', this.idPlayer]);
    });
  }
}
