import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { ViewTrainingComponent } from './view-training/view-training.component';

const routes: Routes = [
  { path: 'view-training', component: ViewTrainingComponent },
  { path: 'training-details/:id', component: TrainingDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingModuleRoutingModule { }
