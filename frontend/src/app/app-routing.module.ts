import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import AddEntryComponent from './addEntry/add-entry/add-entry.component';
import { AllEntriesComponent } from './allEntries/all-entries/all-entries.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'allentries', component: AllEntriesComponent },
  { path: "addentry", component: AddEntryComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "calendar", component: CalendarComponent },
  {path: "my_profile", component: UserProfileComponent  },
  {path: "settings", component: SettingsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
