import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    title: 'micro:bit Workshops',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'w/:id',
    title: 'Workshop · micro:bit Workshops',
    loadComponent: () => import('./workshop/workshop').then((m) => m.Workshop),
  },
];
