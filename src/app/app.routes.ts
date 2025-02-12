import { Routes } from '@angular/router';
import { LoginComponent } from './components/noLoginReq/login/login.component';
import { HomepageComponent } from './components/noLoginReq/homepage/homepage.component';
import { RegisterComponent } from './components/noLoginReq/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'homepage',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'homepage',
        component: HomepageComponent,
    },
]   
