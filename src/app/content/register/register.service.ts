import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  _url = 'http://localhost/a/e-library/e-library/api/register.exe.php';
  // _url = 'http://localhost:4200/api/register.exe.php';

  register(User){
    User = JSON.stringify(User);
    // console.log(User);
    return this._http.post<any>(this._url,User);
  }
}
