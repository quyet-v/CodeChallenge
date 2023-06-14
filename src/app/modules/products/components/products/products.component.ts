import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    productsService: ProductsService;
    isAdmin: boolean = false;

    constructor(productsService: ProductsService, private authService: AuthService) {
        this.productsService = productsService;
        this.isAdmin = authService.getRole() == "admin";
    }

    ngOnInit() {
        this.productsService.getProducts().subscribe(response => {
        this.productsService.setProducts(response);
        })
    }
}
