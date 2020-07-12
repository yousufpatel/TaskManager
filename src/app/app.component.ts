import {Component} from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  check : string = "<script>alert()</script>";

  constructor(public loginService: LoginService){

  }

  onSearchClick(){

    console.log("Test");
  }

}
