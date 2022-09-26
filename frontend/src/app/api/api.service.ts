import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_url = "http://localhost:1010"

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any>{
    return this.http.get(`${this.api_url}/product/list`)
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
}