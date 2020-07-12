import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { LoginViewModel } from '../classes/login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SignUpViewModel } from '../classes/sign-up-view-model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private httpClient : HttpClient;
  currentUserName: string;
  constructor(private httpBackend: HttpBackend) { }

  public Login(loginViewModel: LoginViewModel): Observable<any> {
  this.httpClient = new HttpClient(this.httpBackend);

    return this.httpClient.post<any>("http://localhost:59879/api/account/authenticate", loginViewModel, { responseType: "json" }).pipe(map(response => {
      if (response.result != null) {

        const serverData: any = JSON.parse(JSON.stringify(response));
        localStorage.setItem('AUTHERIZATION_TOEKN', serverData.result.token);
        localStorage.setItem('ROLE_ID', serverData.result.user.roleId);

        this.currentUserName = response.result.user.personName.firstName + " " + response.result.user.personName.lastName;        
         sessionStorage.currentUser =  response.result.token        
      }
      return response;
    }));
  }

  public Register(signUpViewModel: SignUpViewModel): Observable<any>
  {   
    this.httpClient = new HttpClient(this.httpBackend);

    return this.httpClient.post<any>("http://localhost:59879/api/Account/Register", signUpViewModel, { responseType: "json" }).pipe(map(response => {
      if (response.result != null) {

        const serverData: any = JSON.parse(JSON.stringify(response));
        localStorage.setItem('AUTHERIZATION_TOEKN', serverData.result.token);
        localStorage.setItem('ROLE_ID', serverData.result.user.roleId);

        this.currentUserName = response.result.user.personName.firstName + " " + response.result.user.personName.lastName;        
         sessionStorage.currentUser =  response.result.token        
      }
      return response;
    }));
  }

  public getUserByEmail(email:string) : Observable<any>{
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.get<any>("http://localhost:59879/api/Account/GetUserByEmail/"+ email, { responseType: "json" });
  }

  public Logout(){
    localStorage.clear();
    this.currentUserName = null;

  }

}
