import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { StatsService } from 'src/app/services/stats.service';
import { Player } from 'src/models/Player';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent {
  // Player is an interface defined in src\models\Player.ts
  player: Player;
  idPlayer: string;
  playerStats: any = { empty: true };
  chart: Chart;
  playerPerformance: any = { empty: true };
  fetched = false;
  btnMessage = 'add stats';
  statsbtnMessage = 'add performance';


  /********************************************************************************/
  chartData = {
    labels: ['Attacking', 'Technical', 'Creativity', 'Defending', 'Tackling'],
    datasets: [{
      label: 'Player Stats',
      data: [0, 0, 0, 0, 0],
      backgroundColor: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC'],
      borderColor: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC'],
      borderWidth: 1
    }]
  };

  chartOptions = {
    responsive: true,
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Player Stats'
    },
    scale: {
      pointLabels: {
        fontSize: 14
      }
    }
  };
  /********************************************************************************/

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private statsService: StatsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const canvas = document.getElementById('playerStatsChart') as HTMLCanvasElement;
    this.chart = new Chart(canvas, {
      type: 'radar', // Use the 'radar' chart type
      data: this.chartData,
      options: this.chartOptions
    });

    this.activatedRoute.params.subscribe(params => {
      console.log('params: ', params['id']);
      this.idPlayer = params['id'];
      this.playerService.getPlayer(params['id']).subscribe(

        (player: any) => {
          this.player = player.player;
          console.log('Player fetched successfully:', player);

          if (this.player.position === 'GK') {

            this.chartData.labels = ['Saves', 'Aerial Ability', 'Anticipation', 'Ball Handling', 'Tackling'];
            this.statsService.getgkStatsByPlayerId(this.idPlayer).subscribe(
              (stats: any) => {


                this.playerStats = stats.stats;
                

                if (this.playerStats ==  null) {
                  this.btnMessage = 'add stats';
                }
                else {
                  this.btnMessage = 'edit stats';
                }

                this.chartData.datasets[0].data = [
                  stats.saves || 0,
                  stats.aerialAbility || 0,
                  stats.anticipation || 0,
                  stats.ballHandling || 0,
                  stats.tackling || 0
                ];
                this.chart.update();



              }
              , (error) => {
                this.playerStats = { empty: true };
                console.log('Error fetching GK stats:', error)
              }

            );
          } else {
            this.statsService.getPlayersStatsByPlayerId(this.idPlayer).subscribe(
              (stats: any) => {
                this.playerStats = stats;

                if (this.playerStats ==  null) {
                  this.btnMessage = 'add stats';
                }
                else {
                  this.btnMessage = 'edit stats';
                }

                this.chartData.datasets[0].data = [
                  stats.attacking || 0,
                  stats.tecnical || 0,
                  stats.creativity || 0,
                  stats.defending || 0,
                  stats.tackling || 0
                ];
                this.chart.update();
              }
              , (error) => {
                this.playerStats = { empty: true };
                console.log('Error fetching GK stats:', error)
              }
            );
          }
        }
      );
    });

    this.statsService.getStatByPlayerId(this.idPlayer).subscribe(
      (stats: any) => {
        console.log('Stats fetched successfully:', stats);
        this.playerPerformance = stats;

        if (this.playerPerformance == null) {
          this.statsbtnMessage = 'add performance';
        }
        else {
          this.statsbtnMessage = 'edit performance';
        }
      }
    );

  }

  handleStatistics() {
    console.log('handleStatistics ', this.playerPerformance);

    if (this.player.position == "GK") {

      if (this.playerStats == null) {
        this.router.navigate(['/team/addGkStats/' + this.idPlayer]);
      }
      else {
        this.router.navigate(['/team/editGkStats/' + this.idPlayer]);
      }
    }
    else {
      if (this.playerStats == null) {
        this.router.navigate(['/team/addPlayerStats/' + this.idPlayer]);
      }
      else {
        this.router.navigate(['/team/editPlayerStats/' + this.idPlayer]);
      }
    }

  }

  handlePerformance() {
    console.log('handlePerformance ', this.playerPerformance);
    
    if (this.player.position == "GK") {
      if (this.playerPerformance == null) {
        this.router.navigate(['/team/addGkPerformance/' + this.idPlayer]);
      }
      else {
        this.router.navigate(['/team/editGkPerformance/' + this.idPlayer]);
      }
    }
    else {
      if (this.playerPerformance == null) {
        this.router.navigate(['/team/addPlayerPerformance/' + this.idPlayer]);
      }
      else {
        this.router.navigate(['/team/editPlayerPerformance/' + this.idPlayer]);
      }
    }
  }

}

