import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }

  private setCartsData = new BehaviorSubject<any>("");
  getData = this.setCartsData.asObservable();

  getCart(data){
    this.setCartsData.next(data);
  }

}
