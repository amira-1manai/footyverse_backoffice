import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOverTimeComponent } from './chart-over-time/chart-over-time.component';
import { InjuryChartComponent } from './injury-chart/injury-chart.component';
import { InjuryDetailsComponent } from './injury-details/injury-details.component';
import { ViewInjuriesBackComponent } from './view-injuries-back/view-injuries-back.component';

const routes: Routes = [
  { path: 'view-injuries-back', component: ViewInjuriesBackComponent },
  { path: 'injury-details/:id', component: InjuryDetailsComponent },
  { path: 'chartInjuries', component: InjuryChartComponent },
  { path: 'timeChart', component: ChartOverTimeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InjuryModuleRoutingModule {
  selectedOption: string;

}
