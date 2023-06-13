import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];

  constructor() { }

  addProduct(product: Product) {
    product.quantity = 1;
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  findIndex(product: Product): number {
    return this.cart.findIndex(p => p.sku == product.sku);
  }

  removeProduct(product: Product) {
    const index = this.findIndex(product);
    if(index > -1) {
      this.cart.splice(index,1);
    }
  }
}
