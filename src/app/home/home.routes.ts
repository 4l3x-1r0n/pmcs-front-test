import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";



export default [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('../modules/dashboard/dashboard.component'),
                title: 'titulo del dashboard'
            },
        ]
    }
] as Route[];
