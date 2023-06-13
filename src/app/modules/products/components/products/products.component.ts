import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(response => {
      this.productsService.setProducts(response);
    })
  }
}
