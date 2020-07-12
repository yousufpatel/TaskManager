import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/classes/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input("currentProject") project: Project;
  @Input("recordIndex") i: number;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  constructor()
  {
  }

  ngOnInit()
  {
  }

  onEditClick(event, i)
  {
    this.editClick.emit({ event, i});
  }

  onDeleteClick(event, i)
  {
    this.deleteClick.emit({ event, i});
  }
}
