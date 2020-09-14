import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Books } from "../content/books/books";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }

  _url = 'http://localhost/a/e-library/e-library/api/books.exe.php';
  _bCatUrl = 'http://localhost/a/e-library/e-library/api/bCate.exe.php';
  _upUrl = 'http://localhost/a/e-library/e-library/api/updBooks.exe.php';
  _Durl = 'http://localhost/a/e-library/e-library/api/delete.exe.php';
  // _url = 'http://chromaticbd.com/api/books.exe.php';
  // _bCatUrl = 'http://chromaticbd.com/api/bCate.exe.php';
  // _upUrl = 'http://chromaticbd.com/api/updBooks.exe.php';
  // _Durl = 'http://chromaticbd.com/api/delete.exe.php';
  private setBooksData = new BehaviorSubject<any>("");
  getData = this.setBooksData.asObservable();

  getBcate(){
    return this._http.get<Books[]>(this._bCatUrl);
  }

  getBooks(){
    return this._http.get<Books[]>(this._url);
  }

  updBooks(data){
    data = JSON.stringify(data);
    console.log(data);
    return this._http.post<any>(this._upUrl, data);
  }

  dltBooks(data){
    data = JSON.stringify(data);
    return this._http.post<any>(this._Durl, data);
  }

  //to set clicked data into modal field
  getBooksData(data){
    this.setBooksData.next(data);
  }


}
