import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-view-team-back',
  templateUrl: './view-team-back.component.html',
  styleUrls: ['./view-team-back.component.css']
})

export class ViewTeamBackComponent {

  players: Player[] = [];
  goalkeepers: Player[] = [];
  midfielders: Player[] = [];
  defenders: Player[] = [];
  forwards: Player[] = [];

  searchText: string = '';
  filteredPlayers: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(
      (data: any) => {
        console.log('Players fetched successfully:', data.players);
        this.players = data.players;

        this.players.forEach((player) => {
          if (player.position === 'GK') {
            this.goalkeepers.push(player);
          } else if (player.position === 'CAM' || player.position === 'CM' || player.position === 'CDM' || player.position === 'RM' || player.position === 'LM') {
            this.midfielders.push(player);
          } else if (player.position === 'CB' || player.position === 'RB' || player.position === 'LB') {
            this.defenders.push(player);
          } else if (player.position === 'RW' || player.position === 'LW' || player.position === 'CF' || player.position === 'ST') {
            this.forwards.push(player);
          }
        }

        );
        console.log('Goalkeepers:', this.goalkeepers);
        console.log('Midfielders:', this.midfielders);
        console.log('Defenders:', this.defenders);
        console.log('Forwards:', this.forwards);

      }

    );
  }

  searchPlayerByPosition(position: string): number {
    let playersByPosition: Player[] = [];

    this.players.forEach((player) => {
      if (player.position === position) {
        playersByPosition.push(player);
      }
    });
    return playersByPosition.length;
  }

  applyFilter() {
    this.filteredPlayers = this.players;

    const filterValue = this.searchText.trim().toLowerCase();
    // Apply filter based on search text
    this.filteredPlayers = this.players.filter(player =>
      Object.values(player).some(value =>
        value.toString().toLowerCase().includes(filterValue)
      )
    );
    console.log('Filtered players:', this.filteredPlayers);

  }

  deletePlayer(playerId: string) {
    console.log('Deleting player with ID:', playerId);
    this.playerService.deletePlayer(playerId).subscribe(
      (data: any) => {
        console.log('Player deleted successfully:', data);
        this.players = this.players.filter(player => player._id !== playerId);
        this.goalkeepers = this.goalkeepers.filter(player => player._id !== playerId);
        this.midfielders = this.midfielders.filter(player => player._id !== playerId);
        this.defenders = this.defenders.filter(player => player._id !== playerId);
        this.forwards = this.forwards.filter(player => player._id !== playerId);
        alert('Player deleted successfully!');
      },
      error => {
        console.error('Error deleting player:', error);
      }
    );
  }

}
