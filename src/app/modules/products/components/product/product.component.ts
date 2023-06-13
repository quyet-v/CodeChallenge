import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product?: Product;

  constructor(private cartService: CartService, private authService: AuthService) { }

  handleAdd() {
    if(this.product != undefined) {
      this.cartService.addProduct(this.product);
    }
  }

  containsItem(): boolean {
    let contains = false;
    if(this.product != undefined) {
      contains = this.cartService.findIndex(this.product) > -1;
    }
    return contains;
  }

  isAdmin(): boolean {
    const token = localStorage.getItem("token");
    let isAdmin = false;
    if(token) {
      isAdmin = this.authService.getRole(token) == "admin";
    }
    return isAdmin
  }

}
