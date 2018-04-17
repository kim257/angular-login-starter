import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../providers/authguard';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // ...incentiveRoutes,
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
