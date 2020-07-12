import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ProjectsService } from '../../shared/projects.service';
import { Project } from '../../classes/project';
import { ClientLocationsService } from '../../shared/client-locations.service';
import { ClientLocation } from '../../classes/client-location';
import { NgForm } from '@angular/forms';
import * as $ from "jquery";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  clientLocations : ClientLocation[];
  showLoading :boolean = true;

  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = "ProjectName";
  searchText: string = null;

  @ViewChild("newForm") newForm: NgForm;
  @ViewChild("editForm") editForm: NgForm;

  constructor(public datePipe: DatePipe, private projectsService: ProjectsService,private clientLocationsService : ClientLocationsService) { }

  ngOnInit(): void {

    this.clientLocationsService.getClientLocations().subscribe(
      (response:any) => {
        this.clientLocations = response.result;
      }      
    )

    this.projectsService.getProjects().subscribe(
      (response: any) => {
        this.projects = response.result;
        this.showLoading =false;
      }    
    )
  }

  onNewClcik(event){
    this.newForm.resetForm();
  }

  onSaveClick() {
    if (this.newForm.valid)
    {
    this.projectsService.AddProject(this.newProject).subscribe(
      (response: any) => {
        if (response.status == true) {
          this.projects.push(response.result);
          this.newProject.projectName = null;
          this.newProject.dateOfStart = null;
          this.newProject.teamSize = null;
          this.newProject.active = true;
          this.newProject.clientLocationID = 0;
          this.newProject.status = null;
        }
        $("#newFormCancel").trigger("click");
      }
    )
    }
  }
  onEditClick(event, index: number) {

      this.editForm.resetForm();
      setTimeout(()=>{    
      this.editProject.projectId = this.projects[index].projectId;
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.dateOfStart = this.datePipe.transform(this.projects[index].dateOfStart, 'yyyy-MM-dd');
      this.editProject.teamSize = this.projects[index].teamSize;
      this.editProject.active = this.projects[index].active;
      this.editProject.clientLocationID = this.projects[index].clientLocationID;
      this.editProject.clientLocation = this.projects[index].clientLocation;
      this.editProject.status = this.projects[index].status;
      this.editIndex = index;
      },100)
    
  }

  onUpdateClick() {
    if (this.editForm.valid)
    {
    this.projectsService.EditProject(this.editProject).subscribe(
      (response: any) => {
        this.projects[this.editIndex] = response.result;
        this.editProject.dateOfStart = null;
        this.editProject.projectId = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
        this.editProject.active = true;
        this.editProject.clientLocationID = 0;
        this.editProject.status = null;
        $("#editFormCancel").trigger("click");
      }, (error) => {
      }
    )
    }
  }

  onDeleteClick(event, index: number) {
    this.deleteProject.projectId = this.projects[index].projectId;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.datePipe.transform(this.projects[index].dateOfStart, 'yyyy-MM-dd');
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.deleteIndex = index;
  }

  onDeleteConfirmClick() {
    this.projectsService.DeleteProject(this.deleteProject.projectId).subscribe(
      (response: any) => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.dateOfStart = null;
        this.deleteProject.projectId = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;

      }, (error) => {

        console.log(error);

      }
    )
  }

  onSearchClick() {
    this.projectsService.SearchProject(this.searchBy, this.searchText).subscribe(
      (response:any) => {
        this.projects = response.result;
      },
      () => {

      }

    )
  }


}
