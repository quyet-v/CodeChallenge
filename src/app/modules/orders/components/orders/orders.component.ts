import { Component } from "@angular/core";
import { type Order } from "src/app/models/Order";
import { type OrdersService } from "../../services/orders.service";

@Component({
    selector: "app-orders",
    templateUrl: "./orders.component.html",
    styleUrls: ["./orders.component.css"]
})
export class OrdersComponent {
    orders: Order[] = [];

    constructor (private readonly orderService: OrdersService) { }

    ngOnInit () {
        this.orderService.getOrders().subscribe(response => {
            this.orders = response;
        });
    }
}
