import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`http://localhost:3000/product`);
  }
  addProductToCart(payload) {
    return this.http.post(`http://localhost:3000/cart`, payload);
  }
  getCartItems() {
    return this.http.get(`http://localhost:3000/cart`);
  }
  increaseQty(payload,id) {
    return this.http.put(`http://localhost:3000/cart/${id}`, payload);
  }
  emptyCart() {
    return this.http.delete(`http://localhost:3000/cart`);
      
  }
}