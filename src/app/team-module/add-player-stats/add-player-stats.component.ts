import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-add-player-stats',
  templateUrl: './add-player-stats.component.html',
  styleUrls: ['./add-player-stats.component.css']
})
export class AddPlayerStatsComponent {

  addPlayerStatsForm: FormGroup;
  addedPlayerStats: any;
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
    });
    
    this.addPlayerStatsForm = new FormGroup({
      attacking: new FormControl(),
      tecnical: new FormControl(),
      creativity: new FormControl(),
      defending: new FormControl(),
      tackling: new FormControl()
    });
  }


  onSubmit(): void {
    this.addedPlayerStats = this.addPlayerStatsForm.value;
    this.addedPlayerStats.player = this.idPlayer;
    this.statsService.addPlayerStats(this.addedPlayerStats).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/team/player-details/', this.idPlayer]);
    });
  }

}
