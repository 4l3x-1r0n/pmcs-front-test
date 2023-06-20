import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.routes') },
    { path: '**', loadComponent: () => import( './nopagefound/nopagefound.component' ).then(({ NopagefoundComponent }) => NopagefoundComponent) },
];
