import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full' ,loadChildren: () => import('./home/home.routes') },
    { path: 'auth', loadChildren: () => import('./auth/auth.routes') },
    { path: '**', loadComponent: () => import( './nopagefound/nopagefound.component' ).then(({ NopagefoundComponent }) => NopagefoundComponent) },
];
