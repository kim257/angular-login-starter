import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app';
import {LoginComponent} from './component/login/login.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import {MainModule} from './main/main.module';
import {AuthGuard} from './providers/authguard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    MainModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
