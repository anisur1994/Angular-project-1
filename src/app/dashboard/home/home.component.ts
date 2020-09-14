import { Component, OnInit } from '@angular/core';
import { BookIns } from './book-ins';
import { BooksService } from 'src/app/services/books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  booksCate;
  myFiles;

  constructor(
    private _booksService: BooksService,
    private _http: HttpClient,
    private _router: Router
  ) { }

  ngOnInit() {
    this._booksService.getBcate()
    .subscribe(
      data => this.booksCate = data
    )
  }
  onChange(event) {
    this.myFiles = event.target.files[0];
  }

  userModel = new BookIns('', '', 0, 0, '', 0, '');

  onSubmit(){

    let userData = new FormData();
    userData.append("image",this.myFiles);
    userData.append("name", this.userModel.name);
    userData.append("author", this.userModel.author);
    userData.append("category", this.userModel.category.toString());
    userData.append("isbn", this.userModel.isbn.toString());
    userData.append("description", this.userModel.description);

    // this._http.post<any>('http://chromaticbd.com/api/insBooks.exe.php', userData)
    this._http.post<any>('http://localhost/a/e-library/e-library/api/insBooks.exe.php', userData)
    .subscribe(
      res => {
        if(res)
{
  this._router.navigate(['/dashboard/posts']);
}        console.log(res)
      }
    )
  }

}
