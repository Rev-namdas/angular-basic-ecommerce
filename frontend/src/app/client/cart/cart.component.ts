import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/models/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  orderList: Products[] = [];
  loggedIn: boolean = false;
  totalAmount: number = 0

  constructor(private router: Router) {}

  ngOnInit(): void {
    let items: any = localStorage.getItem('cartdetails');
    items = JSON.parse(items);
    this.orderList = items;
    this.totalAmount = items.reduce((acc: any, next: any) => acc + next.price, 0)

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

  removeFromCart(removedProductId: any){
    this.orderList = this.orderList.filter(each => each.id !== removedProductId)
    this.totalAmount = this.orderList.reduce((acc: any, next: any) => acc + next.price, 0)
    localStorage.setItem("cartdetails", JSON.stringify(this.orderList))
  }

  nextPage(){
    if(this.loggedIn){
      this.router.navigate(['user/checkout'])
    } else {
      this.router.navigate(['user/login'])
    }
  }
}
