import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  cartService = inject(CartService);
  products = [
    {name: 'product 1', price:100, id: 1},
    {name: 'product 2', price:200, id: 2},
    {name: 'product 3', price:300, id: 3},
    {name: 'product 4', price:400, id: 4},
    {name: 'product 5', price:500, id: 5},

  ];
  addToCart(product:any) {
    this.cartService.addToCart(product);
  }


}
