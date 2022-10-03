import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_url = "http://localhost:1010"

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  getProductList(): Observable<any>{
    return this.http.get(`${this.api_url}/product/list`)
  }

  getProductById(payload: any): Observable<any>{
    return this.http.get(`${this.api_url}/product/${payload}`)
  }

  getProductImageById(payload: any): Observable<any>{
    return this.http
    .get(`${this.api_url}/product-image/${payload}`,
    { responseType: "blob" })
    .pipe(
      map((each: any) => {
        const urlToBlob = window.URL.createObjectURL(each)
        return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob)
      })
    )
  }

  uploadImage(payload: any){
    const formData = new FormData()

    formData.append("product_img", payload)

    return this.http.post(`${this.api_url}/upload`, formData)
  }

  addProduct(payload: any){
    return this.http.post(`${this.api_url}/product/add`, payload)
  }

  updateProduct(payload: any){
    return this.http.patch(`${this.api_url}/product/update`, payload)
  }

  deleteProduct(id: any){
    return this.http.delete(`${this.api_url}/product/delete/${id}`)
  }

  registerAccount(payload: any){
    return this.http.post(`${this.api_url}/user/registration`, payload)
  }

  loginAccount(payload: any){
    return this.http.post(`${this.api_url}/user/login`, payload)
  }

  placeOrder(payload: any){
    return this.http.post(`${this.api_url}/order/place`, payload)
  }

  orderList(){
    return this.http.get(`${this.api_url}/order/list`)
  }
}
