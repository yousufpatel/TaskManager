import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { LoginViewModel } from '../classes/login-view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private router:Router) { }

  loginViewModel:LoginViewModel = new LoginViewModel();
  loginError : string;

  ngOnInit(): void {
  }

  onLoginClick(event){
    this.loginService.Login(this.loginViewModel).subscribe(
      (response :any)=> {
        if(response.status == true){
           this.router.navigateByUrl("/dashboard");
        } else {
          this.loginError = response.messege;
        }

      },
      (error)=> {}
    )
  }

}
