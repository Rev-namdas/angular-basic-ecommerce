import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  nameField: string = '';
  contactField: string = '';
  addressField: string = '';
  productIds: any = [];
  purchasedDate: any = '';
  orders: any = []

  constructor(private apiCall: ApiService) {}

  ngOnInit(): void {
    let orderItems: any = localStorage.getItem('cartdetails');
    orderItems = JSON.parse(orderItems);
    this.orders = orderItems

    this.productIds = orderItems.map((each: any) => each.id);
    const date = new Date();
    this.purchasedDate = date.toLocaleDateString();
    console.log(date.toLocaleDateString());
  }

  placeOrder() {
    const payload = {
      name: this.nameField,
      contact: this.contactField,
      address: this.addressField,
      ids: this.productIds,
      date: this.purchasedDate,
    };
    this.apiCall.placeOrder(payload).subscribe((data) => {
      console.log(data);
      alert('Thank You For Your Purchase !')
    })
  }
}
