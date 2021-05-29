import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { MytestComponent } from './mytest/mytest.component';

const routes: Routes = [
  { path: 'test', component: MytestComponent },
  { path: 'home', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
