import { Component, Input } from "@angular/core";
import { type Product } from "src/app/models/Product";
import { type AuthService } from "src/app/modules/auth/services/auth.service";
import { type CartService } from "src/app/modules/cart/services/cart.service";
import { type DialogService } from "src/app/services/dialog.service";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.css"]
})
export class ProductComponent {
  @Input() product?: Product;
  authService: AuthService;

  constructor (private readonly cartService: CartService, authService: AuthService, private readonly dialogService: DialogService) {
      this.authService = authService;
  }

  /**
     * handleAdd method
     * adds a product to cart
     */
  handleAdd () {
      if (this.product != undefined) {
          this.cartService.addProduct(this.product);
      }
  }

  /**
     * containsItem method
     * checks to see if item is already added to cart
     *
     * @returns true if cart contains item
     */
  containsItem (): boolean {
      let contains = false;
      if (this.product != undefined) {
          contains = this.cartService.findIndex(this.product) > -1;
      }
      return contains;
  }

  /**
     * handleEdit method
     * opens edit dialog
     */
  handleEdit () {
      this.dialogService.setOpenChange(true);
      if (this.product != null) {
          this.dialogService.setProductChange(this.product);
      }
  }
}
