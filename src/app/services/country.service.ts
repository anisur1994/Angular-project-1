import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Country } from "./country";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http: HttpClient) { }

  _url = 'http://localhost/a/e-library/e-library/api/country.exe.php';
  // _url = 'http://localhost/a/e-library/api/country.exe.php';

  getCountry(){
    return this._http.get<Country[]>(this._url);
  }
}
