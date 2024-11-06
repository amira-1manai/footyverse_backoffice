import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGkPerformanceComponent } from './add-gk-performance/add-gk-performance.component';
import { AddGkStatsComponent } from './add-gk-stats/add-gk-stats.component';
import { AddPlayerPerformanceComponent } from './add-player-performance/add-player-performance.component';
import { AddPlayerStatsComponent } from './add-player-stats/add-player-stats.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditGkPerformanceComponent } from './edit-gk-performance/edit-gk-performance.component';
import { EditGkStatsComponent } from './edit-gk-stats/edit-gk-stats.component';
import { EditPlayerStatsComponent } from './edit-player-stats/edit-player-stats.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { ViewTeamBackComponent } from './view-team-back/view-team-back.component';
import { VideoAnalysisComponent } from './video-analysis/video-analysis.component';
import { EditPlayerPerformanceComponent } from './edit-player-performance/edit-player-performance.component';

const routes: Routes = [
  { path: 'view-team-back', component: ViewTeamBackComponent },
  { path: 'player-details/:id', component: PlayerDetailsComponent },
  { path: 'add-player', component: AddPlayerComponent },

  { path: 'addGkStats/:idPlayer', component: AddGkStatsComponent },
  { path: 'addPlayerStats/:idPlayer', component: AddPlayerStatsComponent },
  { path: 'addGkPerformance/:idPlayer', component: AddGkPerformanceComponent },
  { path: 'addPlayerPerformance/:idPlayer', component: AddPlayerPerformanceComponent },

  { path: 'editGkStats/:idPlayer', component: EditGkStatsComponent },
  { path: 'editPlayerStats/:idPlayer', component: EditPlayerStatsComponent },
  { path: 'editGkPerformance/:idPlayer', component: EditGkPerformanceComponent }, 
  { path: 'editPlayerPerformance/:idPlayer', component: EditPlayerPerformanceComponent },


  
  { path: 'video-analysis', component: VideoAnalysisComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamModuleRoutingModule { }
