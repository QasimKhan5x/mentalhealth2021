import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import AddEntryComponent from './addEntry/add-entry/add-entry.component';
import { HomeComponent } from './home/home/home.component';
import { AllEntriesComponent } from './allEntries/all-entries/all-entries.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { ErrorService } from './services/error.service';
import { EntryService } from './services/entry.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RefreshComponent } from './refresh/refresh.component';

// Firebase modules
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent,
    AddEntryComponent,
    AllEntriesComponent,
    AboutUsComponent,
    CalendarComponent,
    UserProfileComponent,
    SettingsComponent,
    RefreshComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDN5NpeukSf-ujBkEiAeuThshShfUjatzY',
      authDomain: 'mentalhealth2021-686eb.firebaseapp.com',
      projectId: 'mentalhealth2021-686eb',
      storageBucket: 'mentalhealth2021-686eb.appspot.com',
      messagingSenderId: '1048220989393',
      appId: '1:1048220989393:web:0efca966585e7a7c94d2f0',
    }),
  ],
  providers: [LoginService, SignupService, ErrorService, EntryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
