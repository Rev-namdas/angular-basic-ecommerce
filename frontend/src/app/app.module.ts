import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './admin/products/products.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { AllProductsComponent } from './client/all-products/all-products.component';
import { CartComponent } from './client/cart/cart.component';
import { LoginComponent } from './client/login/login.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { RegisterComponent } from './client/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    OrdersComponent,
    AllProductsComponent,
    CartComponent,
    LoginComponent,
    CheckoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
