import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Books } from 'src/app/content/books/books';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  bookData;

  constructor(
    private _bookServices: BooksService,
    private _router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this._bookServices.getBooks()
    .subscribe(
      (data: Books[]) => {
        this.bookData = data
      }
    )
  }


  ngDelete(items: Books){
    if(confirm("Are you sure to delete?")){
      this._bookServices.dltBooks(items)
      .subscribe(
        (data) => {
          data = parseInt(data['status']);
          if (data) {
            this.ngOnInit();
          }
        }
      )
    }
  }

  openDialog(items: Books) {
    const dialogRef = this.dialog.open(EditComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this._bookServices.getBooksData(items);
  }
}
