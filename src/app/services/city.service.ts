import { Injectable } from '@angular/core';
import { Country } from "./country";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http: HttpClient) { }


  _url = 'http://localhost/a/e-library/e-library/api/cities.exe.php';
  // _url = 'http://localhost/a/e-library/api/cities.exe.php';

  getCity(Country){
    Country = JSON.stringify(Country);
    // console.log(Country);
    return this._http.post<any>(this._url, Country);
  }
}
