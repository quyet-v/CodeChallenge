import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart: Product[] = []
  total: number = 0;

  constructor(private cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }


}
