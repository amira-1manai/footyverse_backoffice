import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-edit-gk-stats',
  templateUrl: './edit-gk-stats.component.html',
  styleUrls: ['./edit-gk-stats.component.css']
})
export class EditGkStatsComponent {

  editGkStatsForm: FormGroup = new FormGroup({
    saves: new FormControl(),
    aerialAbility: new FormControl(),
    anticipation: new FormControl(),
    ballHandling: new FormControl(),
    tackling: new FormControl()
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
      console.log('params: ', params['idPlayer']);
      this.idPlayer = params['idPlayer'];

      this.statsService.getgkStatsByPlayerId(this.idPlayer).subscribe((response) => {
        this.editedGkStats = response;
        console.log('editedGkStats:', this.editedGkStats);

        // put the response in the form

        this.editGkStatsForm = new FormGroup({
          saves: new FormControl(this.editedGkStats.saves),
          aerialAbility: new FormControl(this.editedGkStats.aerialAbility),
          anticipation: new FormControl(this.editedGkStats.anticipation),
          ballHandling: new FormControl(this.editedGkStats.ballHandling),
          tackling: new FormControl(this.editedGkStats.tackling)
        });
      }
      );
    });

  }

  onSubmit(): void {
    const formData = this.editGkStatsForm.value;

    this.editedGkStats.player = this.idPlayer;
    Object.assign(this.editedGkStats, formData);

    this.statsService.updateGkStat(this.editedGkStats).subscribe((response) => {
      console.log('Response:', response);
       this.router.navigate(['/team/player-details/', this.idPlayer]);
    });
  }
}
