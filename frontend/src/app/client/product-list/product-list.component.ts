import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Products } from 'src/models/Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Products[] = [];
  imgUrl = ""

  constructor(private apiCall: ApiService) {}

  ngOnInit() {
    let cartStorage: any = localStorage.getItem('cartdetails');
    cartStorage = JSON.parse(cartStorage);

    let productStorage: any = localStorage.getItem('products');
    productStorage = JSON.parse(productStorage);

    if (cartStorage == null || cartStorage.length == 0) {
      localStorage.setItem('cartdetails', JSON.stringify([]));
    }

    this.apiCall.getProductList().subscribe((data) => {
      data.map((each: any) => {
        this.apiCall.getProductImageById(each.id).subscribe((data) => {
          this.imgUrl = data
          each['product_img'] = data
          each['clicked'] = false;
          this.productList.push(each);          

          localStorage.setItem('products', JSON.stringify(this.productList));            
        })

      });
    });

    // if(productStorage == null || productStorage.length == 0){
    //   console.log('again');
      
    //   this.apiCall.getProductList().subscribe((data) => {
    //     data.map((each: any) => {
    //       this.apiCall.getProductImageById(each.id).subscribe((data) => {
    //         this.imgUrl = data
    //         each['product_img'] = data
    //         each['clicked'] = false;
    //         this.productList.push(each);          
  
    //         localStorage.setItem('products', JSON.stringify(this.productList));            
    //       })

    //     });
    //   });
    // } else {
    //   console.log('else');
      
    //   let productStorage: any = localStorage.getItem('products');
    //   productStorage = JSON.parse(productStorage);

    //   this.productList = productStorage
    // }
  }

  addToCart(selectedProduct: any) {
    this.productList.map((each: any) => {
      if (each.id === selectedProduct.id) {
        each.clicked = true;
      }
    });

    localStorage.setItem("products", JSON.stringify(this.productList))

    let cart: any = localStorage.getItem('cartdetails');
    cart = JSON.parse(cart);

    cart.push(selectedProduct);

    localStorage.setItem('cartdetails', JSON.stringify(cart));
  }
}
