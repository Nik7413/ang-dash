import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentComponent } from './assesment/assesment.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full' },
  {path:'dashboard', component:DashboardComponent},
  {path:'courses', component:CoursesComponent},
  {path:'assesment', component:AssesmentComponent},
  {path:'settings', component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
