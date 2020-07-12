import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS,AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { ProjectsService } from '../shared/projects.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../classes/project';

@Directive({
  selector: '[appProjectNameUniqueValidator]',
  providers : [{provide : NG_ASYNC_VALIDATORS,useExisting : ProjectNameUniqueValidatorDirective,multi :true}]
})
export class ProjectNameUniqueValidatorDirective  implements AsyncValidator {
  constructor(private projectsService: ProjectsService) { }

  validate(control: AbstractControl): Observable<ValidationErrors>  | null {
    return this.projectsService.getProjectByProjectName(control.value).pipe(map( (existingProject: any) => {
      if (existingProject.result != null)
      {
        return { uniqueProjectName: { valid: false }};
      }
      else
      {
        return null;
      }
    }));
       
  }
 

  
  

 
}
