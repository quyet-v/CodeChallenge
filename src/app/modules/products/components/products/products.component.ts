import { Component } from "@angular/core";
import { type ProductsService } from "../../services/products.service";
import { Product } from "src/app/models/Product";
import { type AuthService } from "src/app/modules/auth/services/auth.service";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"]
})
export class ProductsComponent {
    productsService: ProductsService;
    isAdmin = false;

    constructor (productsService: ProductsService, private readonly authService: AuthService) {
        this.productsService = productsService;
        this.isAdmin = authService.getRole() == "admin";
    }

    ngOnInit () {
        this.productsService.getProducts().subscribe(response => {
            this.productsService.setProducts(response);
        });
    }
}
