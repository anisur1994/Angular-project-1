import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'http://localhost/a/e-library/e-library/api/login.exe.php';
  // _url = 'http://localhost/a/e-library/e-library/api/login.exe.php';
  constructor(private _http: HttpClient) { }

  getLogin(data){
    data = JSON.stringify(data);
    // console.log(data);
    return this._http.post<any>(this._url, data)
  }
}
