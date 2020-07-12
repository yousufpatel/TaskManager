import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from '../classes/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient : HttpClient) { 
  }
  getProjects() : Observable<any> {
    return this.httpClient.get<any>("http://localhost:59879/api/project/GetProjects",{responseType :"json"});
  }

  getProjectByProjectName(projectName :string) : Observable<any>{
    return this.httpClient.get<any>("http://localhost:59879/api/Project/GetProjectByProjectName/"+projectName);
  }

  AddProject(newProject :Project ) : Observable<any>{
    return this.httpClient.post<any>("http://localhost:59879/api/project/AddProject",newProject,{responseType :"json"});
  }

  EditProject(existingProject :Project):Observable<any>{
    return this.httpClient.put<any>("http://localhost:59879/api/project/EditProject/"+existingProject.projectId,existingProject,{responseType :"json"})
  }

  DeleteProject(projectId : number):Observable<any>{
    return this.httpClient.delete<any>("http://localhost:59879/api/project/DeleteProject/"+projectId,{responseType :"json"})
  }

  SearchProject(searchBy : string, searchText : string):Observable<any> {
    return this.httpClient.get<any>("http://localhost:59879/api/project/SearchProject/"+searchBy+"/"+searchText,{responseType :"json"})
  }


}
