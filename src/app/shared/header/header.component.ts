import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '';
  cartData;

  constructor(
    public router: Router,
    private titleService: Title,
    private _cartData: CartService
  ) { }

  ngOnInit() {
    this.title = this.titleService.getTitle();

    this._cartData.getData.subscribe(
      data => this.cartData = data
    )
  }

}
