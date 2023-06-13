import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {

  }

  handleAdd() {
    if(this.product != undefined) {
      this.cartService.addProduct(this.product);
    }
  }
}
