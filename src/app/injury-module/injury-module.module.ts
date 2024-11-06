import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InjuryModuleRoutingModule } from './injury-module-routing.module';
import { ViewInjuriesBackComponent } from './view-injuries-back/view-injuries-back.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { PagesRoutes } from '../pages/pages.routing.module';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { InjuryDetailsComponent } from './injury-details/injury-details.component';
import { InjuryChartComponent } from './injury-chart/injury-chart.component';
import { ChartOverTimeComponent } from './chart-over-time/chart-over-time.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ViewInjuriesBackComponent,
    InjuryDetailsComponent,
    InjuryChartComponent,
    ChartOverTimeComponent
  ],
  imports: [
    CommonModule,
    InjuryModuleRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    MatIconModule,
    TablerIconsModule.pick(TablerIcons),
    NgApexchartsModule,
    NgChartsModule,

  ]
})
export class InjuryModuleModule { }
