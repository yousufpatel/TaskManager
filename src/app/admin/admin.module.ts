import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../shared/dashboard.service';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeamSizeValidatorDirective } from '../Directives/team-size-validator.directive';
import { ClientLocationStatusValidatorDirective } from '../Directives/client-location-status-validator.directive';
import { ProjectNameUniqueValidatorDirective } from '../Directives/project-name-unique-validator.directive';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [DashboardComponent,MyProfileComponent,AboutComponent,ProjectsComponent,TeamSizeValidatorDirective,ClientLocationStatusValidatorDirective,ProjectNameUniqueValidatorDirective, ProjectComponent],
  exports : [DashboardComponent,MyProfileComponent,AboutComponent,ProjectsComponent,TeamSizeValidatorDirective,ClientLocationStatusValidatorDirective,ProjectNameUniqueValidatorDirective,ProjectComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  providers:[DashboardService,DatePipe]
})
export class AdminModule { }
