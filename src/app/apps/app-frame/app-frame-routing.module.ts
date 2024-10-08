import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFrameComponent } from './app-frame.component';

const routes: Routes = [
  {
    path: '',
    component: AppFrameComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home',
      // },
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('../home/home.component').then((c) => c.HomeComponent),
      // },
      {
        path: 'private',
        // canActivate: [appFrameGuard],
        loadChildren: () =>
          import('../private/private.module').then((m) => m.PrivateModule),
      },
      {
        path: 'public',
        loadChildren: () =>
          import('../public/public.module').then((m) => m.PublicModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFrameRoutingModule {}