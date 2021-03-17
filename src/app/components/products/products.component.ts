import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  quantity;
  products: Array<object> = [];
  constructor(private http: HttpService) {}
  getProductsList(): void {
    this.http.getAllProducts().subscribe((data: any) => {
      this.products = data;
      this.quantity = 1;
    });
  }
  addProductToCart( product,input): void {
        let payload = {
      productId: product._id,
      name:product.name,
      price:product.price,
      quantity:input.value,
    };
    this.http.addProductToCart(payload).subscribe(() => {
      this.getProductsList();
    });
  }
  increaseQuantity(): void {
    this.quantity=this.quantity+1
   }
   decreaseQuantity(): void {
     this.quantity=this.quantity-1
   }
  ngOnInit(): void {
    this.getProductsList();
  }
}