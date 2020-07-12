import { ClientLocation } from './client-location';

export class Project {
    projectId : number;
    projectName : string;
    dateOfStart :string;
    teamSize :number;
    active : boolean;
    status : string;
    clientLocationID : number;
    clientLocation : ClientLocation;

    constructor(){
        this.projectId = 0;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = 0;
        this.clientLocation = new ClientLocation();
    }
}
