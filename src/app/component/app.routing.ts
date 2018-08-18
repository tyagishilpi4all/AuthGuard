import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { Home } from './Home/home.component';
import { Java } from './java/java.component';
import { Angular } from './angular/angular.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes:Routes=[
    {
        path:'',
        component:Home
        
    },
    {
        path:'java',
        component:Java,
        canActivate:[AuthGuard]
    },
    {
        path:'angular',
        component:Angular,
        canActivate:[AuthGuard]
    }

];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);