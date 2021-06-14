import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import AddEntryComponent from './addEntry/add-entry/add-entry.component';
import { AllEntriesComponent } from './allEntries/all-entries/all-entries.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RefreshComponent } from './refresh/refresh.component';
import { RegisterComponent } from './register/register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'allentries', component: AllEntriesComponent },
  { path: "addentry", component: AddEntryComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "my_profile", component: UserProfileComponent },
  { path: "settings", component: SettingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "contact-us", component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
