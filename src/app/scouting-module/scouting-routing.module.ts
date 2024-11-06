import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScoutingComponent } from './add-scouting/add-scouting.component';
import { IndexComponent } from './index/index.component';
import { ViewScoutingComponent } from './view-scouting/view-scouting.component';
import { UpdateScoutingComponent } from './update-scouting/update-scouting.component';
import { DetailScoutingComponent } from './detail-scouting/detail-scouting.component';
import { AddeventComponent } from './addevent/addevent.component';
import { PlayersScoutingComponent } from './players-scouting/players-scouting.component';



const routes: Routes = [
  {path: '',component:IndexComponent, children: [ 

    { path: '', redirectTo:'home', pathMatch: 'full'},
    { path: 'add', component: AddScoutingComponent },
    { path: 'view', component: ViewScoutingComponent },
    { path: 'update-scouting/:id', component: UpdateScoutingComponent },
    { path: 'detail-scouting/:id', component: DetailScoutingComponent },
    { path: 'addevent', component: AddeventComponent },
    { path: 'players-scouting', component: PlayersScoutingComponent }
   

    
    ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoutingRoutingModule { }
