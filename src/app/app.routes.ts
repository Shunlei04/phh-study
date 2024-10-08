import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./apps/signin/signin.component').then((c) => c.SigninComponent),
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./apps/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./apps/app-frame/app-frame.module').then((m) => m.AppFrameModule),
  },
];
