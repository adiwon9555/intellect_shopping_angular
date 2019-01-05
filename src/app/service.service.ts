import { Injectable } from '@angular/core';

import { Product } from "./model/model";
import { Cart } from "./model/model";
import { Observable } from '../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  URL_DEV='http://localhost:3000/';
  constructor(private http:HttpClient) { }
  
  getAllProducts():Observable<any>{
    return this.http.get<any>(this.URL_DEV+'products');
  }
  getAllCarts():Observable<any>{
    return this.http.get<any>(this.URL_DEV+'carts');
  }
  addCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.URL_DEV+'cart',cart);
  }
  deleteCart(_id:String):Observable<any>{
    return this.http.delete<any>(this.URL_DEV+'cart/'+_id);
  }
}
