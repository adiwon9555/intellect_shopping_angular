import { Component, OnInit } from '@angular/core';
import {Product} from '../model/model'
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];
  constructor(private service:ServiceService){

  }

  ngOnInit() {
    
  }
  getAllProducts(){
    this.service.getAllProducts().subscribe(data=>{
      this.products=data.todos;
    });
  }

}
