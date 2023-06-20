import { Component } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Product } from "src/app/models/Product";

@Component({
    selector: "app-cart",
    templateUrl: "./cart.component.html",
    styleUrls: ["./cart.component.css"]
})
export class CartComponent {
    cart: Product[] = [];

    constructor (private cartService: CartService) {
        this.cartService = cartService;
    }

    ngOnInit () {
        this.cart = this.cartService.getCart();
    }

    /**
     * 
     * getTotal method
     * gets the total amount for cart by using calculateTotal
     * from cartService.
     * 
     * @returns total amount for cart
     */
    getTotal() {
        return this.cartService.calculateTotal();
    }
}
