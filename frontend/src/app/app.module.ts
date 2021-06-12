import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';;
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';;
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import AddEntryComponent from './addEntry/add-entry/add-entry.component';
import { HomeComponent } from './home/home/home.component';
import { AllEntriesComponent } from './allEntries/all-entries/all-entries.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { ErrorService } from './services/error.service';
import { EntryService } from './services/entry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';;
import { RefreshComponent } from './refresh/refresh.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent ,
    RegisterComponent,
    AddEntryComponent,
    AllEntriesComponent,
    AboutUsComponent,
    CalendarComponent,
    UserProfileComponent,
    SettingsComponent,
    RefreshComponent,
    HomeComponent],






  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AuthModule.forRoot({
      domain: 'dev-qqye5d7r.us.auth0.com',
      clientId: 'TYiKIIntcukgBJEHd01Y4mhwK9jt6nnW'
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService, SignupService, ErrorService, EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
