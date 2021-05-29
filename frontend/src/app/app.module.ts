import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';;
import { LoginComponent } from './login/login/login.component'
;
import { RegisterComponent } from './register/register/register.component'
;
import AddEntryComponent from './addEntry/add-entry/add-entry.component'
;
import { HomeComponent } from './home/home/home.component';

import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {  AllEntriesComponent} from './allEntries/all-entries/all-entries.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';;
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent ,
    AddEntryComponent,
    AllEntriesComponent,
    AboutUsComponent,
    CalendarComponent,
    UserProfileComponent,
    SettingsComponent,
    HomeComponent],

 
  


  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
