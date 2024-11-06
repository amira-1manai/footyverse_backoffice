import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-edit-player-stats',
  templateUrl: './edit-player-stats.component.html',
  styleUrls: ['./edit-player-stats.component.css']
})
export class EditPlayerStatsComponent {
  

  editPlayerStatsForm: FormGroup = new FormGroup({
    attacking: new FormControl(),
    tecnical: new FormControl(),
    creativity: new FormControl(),
    defending: new FormControl(),
    tackling: new FormControl()
  });
  editedPlayerStats: any;
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

      this.statsService.getPlayersStatsByPlayerId(this.idPlayer).subscribe((response) => {
        this.editedPlayerStats = response;
        console.log('editedPlayerStats:', this.editedPlayerStats);

        // put the response in the form

        this.editPlayerStatsForm = new FormGroup({
          attacking: new FormControl(this.editedPlayerStats.attacking),
          tecnical: new FormControl(this.editedPlayerStats.tecnical),
          creativity: new FormControl(this.editedPlayerStats.creativity),
          defending: new FormControl(this.editedPlayerStats.defending),
          tackling: new FormControl(this.editedPlayerStats.tackling)
        });
      }
      );
    });
    

  }


  onSubmit(): void {
    const formData = this.editPlayerStatsForm.value;

    this.editedPlayerStats.player = this.idPlayer;
    Object.assign(this.editedPlayerStats, formData);

    this.statsService.updatePlayerStats(this.editedPlayerStats).subscribe((response) => {
      console.log('Response:', response);
       this.router.navigate(['/team/player-details/', this.idPlayer]);
    });
  }

}
