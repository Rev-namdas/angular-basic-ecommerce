import { Component, OnInit } from '@angular/core';
import { Products } from 'src/models/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orderList: Products[] = [];
  loggedIn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let items: any = localStorage.getItem('cartdetails');
    items = JSON.parse(items);
    this.orderList = items;

    let loginStatus: any = localStorage.getItem('authstatus');
    
    if (
      loginStatus === null ||
      loginStatus === undefined ||
      loginStatus === ''
    ) {
      this.loggedIn = false      
    } else {
      this.loggedIn = true      
    }
  }
}
