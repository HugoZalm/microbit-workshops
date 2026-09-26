import { Routes } from '@angular/router';

export const beheerRoutes: Routes = [
  {
    path: '',
    title: 'Beheer · micro:bit Workshops',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'login',
    title: 'Inloggen · micro:bit Workshops',
    loadComponent: () => import('./login/login').then((m) => m.Login),
  },
];
