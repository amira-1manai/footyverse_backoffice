import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddScoutingComponent } from './add-scouting/add-scouting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoutingRoutingModule } from './scouting-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewScoutingComponent } from './view-scouting/view-scouting.component';
import { DeleteScoutingComponent } from './delete-scouting/delete-scouting.component';
import { UpdateScoutingComponent } from './update-scouting/update-scouting.component';
import { DetailScoutingComponent } from './detail-scouting/detail-scouting.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AddeventComponent } from './addevent/addevent.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material.module';
import { PlayersScoutingComponent } from './players-scouting/players-scouting.component';




@NgModule({
  declarations: [
    AddScoutingComponent,
    IndexComponent,
    ViewScoutingComponent,
    DeleteScoutingComponent,
    UpdateScoutingComponent,
     DetailScoutingComponent,
    AddeventComponent,
    PlayersScoutingComponent,
    
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    ScoutingRoutingModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatTableModule,
    MaterialModule
  ]
})
export class ScoutingModuleModule { }
