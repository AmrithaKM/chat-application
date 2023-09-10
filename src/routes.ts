import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   title: 'Home Page',
  //   loadComponent: () =>
  //     import('./app/home/home.component').then((c) => c.HomeComponent),
  // },
  {
    path: 'chat',
    title: 'Personal Information',
    loadComponent: () =>
      import('./app/personal/personal.component').then(
        (c) => c.PersonalComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chat',
  },
];
