import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { InjuryModuleRoutingModule } from '../injury-module/injury-module-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    InjuryModuleRoutingModule,
    MatIconModule,
    NgApexchartsModule,
    NgChartsModule,
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
