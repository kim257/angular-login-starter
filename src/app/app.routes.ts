import {mainRoutes} from './main/main-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  ...mainRoutes
  ,
  {path: '**', redirectTo: 'login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
