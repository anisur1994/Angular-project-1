import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

import { Books } from "./books";
import { BooksService } from "../../services/books.service";
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title = 'Books & Media';
  bookList;
  constructor(
    public router: Router,
    private titleService: Title,
    private _bookService: BooksService,
    private _cartService: CartService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this._bookService.getBooks()
    .subscribe(
      (data: Books[]) => {
        this.bookList = data
      }
    )
  }

  onCart(items: Books){
    this._cartService.getCart(items);
  }

}
