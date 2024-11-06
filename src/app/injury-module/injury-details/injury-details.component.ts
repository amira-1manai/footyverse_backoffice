import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InjuryService } from 'src/app/services/injury.service';
import { PlayerService } from 'src/app/services/player.service';
import { Injury } from 'src/models/Injury';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-injury-details',
  templateUrl: './injury-details.component.html',
  styleUrls: ['./injury-details.component.css']
})
export class InjuryDetailsComponent {
  injury: Injury;
  injuredPlayer: Player;
  constructor(private activatedRoute: ActivatedRoute,
     private injuryService: InjuryService,
     private playerService: PlayerService
     ) { }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log('id :', params['id']);
      this.injuryService.getInjury(params['id']).subscribe(
        (data : any) => {
          this.injury = data;
          console.log('Injury fetched successfully:', data.player.firstName);
          console.log('Injury fetched successfully:', data);
          this.playerService.getPlayer(this.injury.player._id).subscribe(
            (player: any) => {
              this.injuredPlayer = player.player;
              console.log('Player fetched successfully:', this.injuredPlayer.firstName);
            }
          );
        }
      );
    });
  }

}
