import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authentificationGuard } from './authentification.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentication/login',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },

      {
        path: 'injury',
        loadChildren: () =>
          import('./injury-module/injury-module.module').then(
            (m) => m.InjuryModuleModule
          )
      },

      {
        path: 'team',
        loadChildren: () =>
          import('./team-module/team-module.module').then(
            (m) => m.TeamModuleModule
          ),
      },

      {
        path: 'training',
        loadChildren: () =>
          import('./training-module/training-module.module').then(
            (m) => m.TrainingModuleModule
          ),
      },

      {
        path: 'user',
        loadChildren: () =>
          import('./user-module/user-module.module').then(
            (m) => m.UserModuleModule
          ),
      },

      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      { path: 'scouting', loadChildren: () => import('./scouting-module/scouting-module.module').then(m => m.ScoutingModuleModule) },
    ],

  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
