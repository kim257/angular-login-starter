import {MainComponent} from './main';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {MainRoutingModule} from './main-routing.module';
import {NgModule} from '@angular/core';
import {NavBarComponent} from '../navbar/navbar';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MainRoutingModule,
    // GlobalModule
  ],
  declarations: [
    MainComponent,
    NavBarComponent
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class MainModule {

}
