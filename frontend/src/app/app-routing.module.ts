import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AddEntryComponent from './addEntry/add-entry/add-entry.component';
import { AllEntriesComponent } from './allEntries/all-entries/all-entries.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'allentries', component: AllEntriesComponent },
  { path: "addentry", component: AddEntryComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
