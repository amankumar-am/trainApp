import { Routes } from '@angular/router';
import { LoginComponent } from './components/noLoginReq/login/login.component';
import { HomepageComponent } from './components/noLoginReq/homepage/homepage.component';
import { RegisterComponent } from './components/noLoginReq/register/register.component';
import { TrainComponent } from './components/loginReq/train/train.component';
import { PassengerComponent } from './components/loginReq/passenger/passenger.component';
import { StationComponent } from './components/loginReq/station/station.component';

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
    {
        path: 'trains',
        component: TrainComponent,
    },
    {
        path: 'stations',
        component: StationComponent,
    },
    {
        path: 'passengers',
        component: PassengerComponent
    }

]   
