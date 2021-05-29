import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { MytestComponent } from './mytest/mytest.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorService } from './services/error.service';

//services

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [LoginService, SignupService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
