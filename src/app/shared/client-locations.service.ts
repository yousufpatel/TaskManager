import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient:HttpClient ) { }

  getClientLocations() : Observable<any> {
    return this.httpClient.get<any>("http://localhost:59879/api/ClientLocation/GetClientLocations",{responseType :"json"});
  }
}
