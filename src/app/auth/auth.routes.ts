import { Route } from "@angular/router";

import { AuthMainWrapperComponent } from "./pages/auth-main-wrapper/auth-main-wrapper.component";

export default [
    {
        path: '', component: AuthMainWrapperComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component'),//le ponemos export default al componente para cargarlo de esta forma
                title: 'titulo del login'
            },
            {
                path: 'forgot-password',
                loadComponent: () => import('./pages/forgot-password/forgot-password.component'),
                title: 'titulo del forgot password'
            },
            {
                path: '**',
                redirectTo: '/auth/login',
            },
        ]
    }
] as Route[];
