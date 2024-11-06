import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingModuleRoutingModule } from './training-module-routing.module';
import { ViewTrainingComponent } from './view-training/view-training.component';

import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from '../pages/pages.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { TrainingDetailsComponent } from './training-details/training-details.component';


@NgModule({
  declarations: [
    ViewTrainingComponent,
    TrainingDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainingModuleRoutingModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(PagesRoutes),
    MatIconModule,
    NgApexchartsModule,
    NgChartsModule,
  ]
})
export class TrainingModuleModule { }
