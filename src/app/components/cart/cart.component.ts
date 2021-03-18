import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;
  constructor(private http: HttpService) {}
  getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data;
     });
  }
  emptyCart(): void{
    
    this.http.emptyCart().subscribe(() => {
      this.getCart();
    });
  }
    
  ngOnInit(): void {
    this.getCart();
  }

}