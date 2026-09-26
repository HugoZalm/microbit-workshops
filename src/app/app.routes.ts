import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'beheer',
    loadChildren: () => import('./beheer/beheer.routes').then((m) => m.beheerRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./public/public.routes').then((m) => m.publicRoutes),
  },
  {
    path: '**',
    title: 'Niet gevonden · micro:bit Workshops',
    loadComponent: () => import('./shared/not-found/not-found').then((m) => m.NotFound),
  },
];
