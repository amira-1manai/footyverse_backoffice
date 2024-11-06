import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from '../team-module/add-player/add-player.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  
  { path: 'edit-user/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
