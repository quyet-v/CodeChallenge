import { Injectable } from "@angular/core";
import { type Product } from "src/app/models/Product";
import { ItemComponent } from "../components/item/item.component";

@Injectable({
    providedIn: "root"
})
export class CartService {
    private cart: Product[] = [];

    constructor () { }

    /**
     * addProduct method
     * takes a product from paramter and
     * adds it into the cart.
     *
     * @param product - product to add into the cart
     */
    addProduct (product: Product) {
        product.quantity = 1;
        this.cart.push(product);
    }

    /**
     * getCart method
     * will return the cart.
     *
     * @returns cart as Product array
     */
    getCart (): Product[] {
        return this.cart;
    }

    /**
     * findIndex method
     * takes a product from parameter and uses findIndex method
     * to find the index of product.
     *
     * @param product - product to find index for
     * @returns -1 if product not found, otherwise return index
     */
    findIndex (product: Product): number {
        return this.cart.findIndex(p => p.sku == product.sku);
    }

    /**
     * isCartEmpty method
     * checks to see if cart is empty by doing a length comparison
     *
     * @returns true if empty, false if not
     */
    isCartEmpty (): boolean {
        return this.cart.length == 0;
    }

    /**
     * clearCart method
     * makes cart emptys
     */
    clearCart () {
        this.cart = [];
    }

    /**
     * removeProduct method
     * uses findIndex method to get the index of item,
     * removes item from cart if it exists.
     *
     * @param product - product to remove from cart
     */
    removeProduct (product: Product) {
        const index = this.findIndex(product);
        if (index > -1) {
            this.cart.splice(index, 1);
        }
    }

    /**
     * calculateTotal method
     * iterates over cart and calculates the total
     * for the users cart.
     *
     * @returns the total price of the cart
     */
    calculateTotal (): number {
        let total = 0;
        // FOREACH product in cart
        this.cart.forEach(product => {
            // IF product has quantity since it's an optional field
            if (product.quantity) {
                total += product.price * product.quantity;
            }
        });
        return total;
    }

    /**
     * setCart method
     * uses cart passed through params and sets current cart to it.
     *
     * @param cart cart to set
     */
    setCart (cart: Product[]) {
        this.cart = cart;
    }
}
