import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PagesRoutes } from '../pages/pages.routing.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    ManageUsersComponent,
    AddUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PagesRoutes),
    MatIconModule,
    NgApexchartsModule,
    NgChartsModule,
  ]
})
export class UserModuleModule { }
