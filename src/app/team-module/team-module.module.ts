import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamModuleRoutingModule } from './team-module-routing.module';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { ViewTeamBackComponent } from './view-team-back/view-team-back.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { PagesRoutes } from '../pages/pages.routing.module';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AddGkStatsComponent } from './add-gk-stats/add-gk-stats.component';
import { AddPlayerStatsComponent } from './add-player-stats/add-player-stats.component';
import { AddGkPerformanceComponent } from './add-gk-performance/add-gk-performance.component';
import { AddPlayerPerformanceComponent } from './add-player-performance/add-player-performance.component';
import { EditGkStatsComponent } from './edit-gk-stats/edit-gk-stats.component';
import { EditPlayerStatsComponent } from './edit-player-stats/edit-player-stats.component';
import { EditGkPerformanceComponent } from './edit-gk-performance/edit-gk-performance.component';
import { VideoAnalysisComponent } from './video-analysis/video-analysis.component';
import { EditPlayerPerformanceComponent } from './edit-player-performance/edit-player-performance.component';


@NgModule({
  declarations: [
    PlayerDetailsComponent,
    ViewTeamBackComponent,
    AddPlayerComponent,
    AddGkStatsComponent,
    AddPlayerStatsComponent,
    AddGkPerformanceComponent,
    AddPlayerPerformanceComponent,
    EditGkStatsComponent,
    EditPlayerStatsComponent,
    EditGkPerformanceComponent,
    VideoAnalysisComponent,
    EditPlayerPerformanceComponent
  ],
  imports: [
    CommonModule,
    TeamModuleRoutingModule,
    MatIconModule,
    FormsModule,
    MaterialModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    ReactiveFormsModule
  ]
})
export class TeamModuleModule { }
