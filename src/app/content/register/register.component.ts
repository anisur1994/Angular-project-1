import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { CountryService } from "../../services/country.service";
import { Country } from 'src/app/services/country';
import { User } from './user';
import { CityService } from 'src/app/services/city.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  title = 'User Registration';
  countryList;
  cityList;

  constructor(
    public router: Router,
    private titleService: Title,
    private _countryServices: CountryService,
    private _cityService: CityService,
    private _registerService: RegisterService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this._countryServices.getCountry()
      .subscribe(
        (data: Country[]) => {
          this.countryList = data
        }
      )
  }

  userModel = new User('', '', '', 0, 0,'');

  countryChange(){
    this._cityService.getCity(this.userModel)
    .subscribe(
      (data: Country[]) => {
        this.cityList = data
      }
    )
  }

  onSubmit(){
    this._registerService.register(this.userModel)
    .subscribe(
      (data) =>{
        data = parseInt(data['status']);
        if(data == "1"){
          alert("Registration successfull");
        }else{
          alert("Registration Unsuccessfull");
        }
      }
    )
  }
}
