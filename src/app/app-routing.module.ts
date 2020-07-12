import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { TestingComponent } from './testing/testing.component';
import { ProjectsComponent } from './admin/projects/projects.component'
import { LoginComponent } from './login/login.component';
import { AdminGaurdService, UserGaurdService } from './gaurds/can-activated-gaurd.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './user/tasks/tasks.component';


const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full"},
  { path: "login", component: LoginComponent },
  { path : "signup",component : SignUpComponent},
  { path: "dashboard", component: DashboardComponent,canActivate : [AdminGaurdService]},
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent,canActivate : [AdminGaurdService]},
  { path:"tasks",component : TasksComponent,canActivate :[UserGaurdService]},
  { path: 'testing', component: TestingComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
