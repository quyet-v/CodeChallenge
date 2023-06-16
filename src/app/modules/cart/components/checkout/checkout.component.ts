import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { type CartService } from "../../services/cart.service";
import { type OrdersService } from "src/app/modules/orders/services/orders.service";
import { type Order } from "src/app/models/Order";
import { type Customer } from "src/app/models/Customer";
import { type Router } from "@angular/router";

@Component({
    selector: "app-checkout",
    templateUrl: "./checkout.component.html",
    styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent {
    firstname = "";
    lastname = "";
    email = "";

    constructor (private readonly orderService: OrdersService, private readonly cartService: CartService, private readonly router: Router) { }

    /**
     * handleOrder method
     * creates a new order using items in cart and
     * info from checkout form
     *
     * @param e event
     */
    handleOrder (e: Event) {
        e.preventDefault();
        const target = e.target;
        const form = target as HTMLFormElement;

        // Already have required field for inputs,
        // But just another layer of protection
        if (form.checkValidity() && !this.cartService.isCartEmpty()) {
            const customer: Customer = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email
            };

            const newOrder: Order = {
                customer,
                products: this.cartService.getCart(),
                dateOrdered: new Date()
            };

            this.orderService.addOrder(newOrder).subscribe(response => {
                alert("Order placed!");
                this.cartService.clearCart();
                this.router.navigate(["/products"]);
            });
        } else {
            alert("Please add items into your cart or fill out the form!");
        }
    }
}
