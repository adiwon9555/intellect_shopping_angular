import { Component, OnInit } from '@angular/core';
import {Product} from './model/model'
import {Cart} from './model/model'
import {ServiceService} from './service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products:Product[];
  public carts:Cart[];
  public view:Boolean=true;
  public ccount=0;
  constructor(private service:ServiceService){

  }

  ngOnInit() {
    this.view=true;
    this.getAllProducts();
    this.getAllCarts();
  }

  changeView(){
    this.view=false;
  }
  changePView(){
    this.view=true;
  }
  getAllProducts(){
    this.view=true;
    this.service.getAllProducts().subscribe(data=>{
      this.products=data.todos;
    });
  }
  ct(){
    let tot=0;
    this.carts.forEach(element => {
      tot=tot+element.price;
    });
    return tot;
  }
  getAllCarts(){
    
    this.service.getAllCarts().subscribe(data=>{
      this.carts=data;
      this.ccount=data.length;
    });
  }
  addCart(product:Product){
    var cart={
      _id:'',
      product:product.name,
      price:product.price

    }
    this.view=false;
    this.service.addCart(cart).subscribe(data=>{
      this.getAllCarts();
    })
  }
  deleteCart(cart){
    let id=cart._id;
    this.service.deleteCart(id).subscribe(data=>{
      this.getAllCarts();
    })
  }

}
