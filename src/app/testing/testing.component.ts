import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  firstname: string;
  lastname: string;
  age: number;
  receivenewsletters: boolean = true;
  gender: string = "Male";
  country: string = "India";
  address: string = "http://facebook.com";

  cities: string[];


  constructor() { }

  ngOnInit(){
    this.cities = ["Delhi", "Mumbai", "chennai"];
  }

  chnageData(): void {

    
    this.firstname = "Yousuf";
    this.lastname = "Patel";
    this.age = 32;
    this.receivenewsletters = false;
    this.gender = "Female";
    this.country = "USA";

  }

}

