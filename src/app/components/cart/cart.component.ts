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
  async emptyCart(): Promise<void> {
    length=this.carts.items.length
    for(let i=0;i<length;i++ )
      {
        await this.http.emptyCart(this.carts.items[i]._id).subscribe((result) => {
        });
      }
      this.getCart();
  }
  ngOnInit(): void {
    this.getCart();
  }

}