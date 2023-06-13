import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  // productsChange: Subject<Product[]> = new Subject<Product[]>();

  constructor(private http: HttpClient) { }

  /**
   * 
   * getProducts method
   * makes a GET request to mock API and gets all products 
   * from DB.
   * 
   * @returns Observable<Product[]> 
   * 
   * 
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/products/${updatedProduct.id}`,updatedProduct);
  }

  findProduct(product: Product): number {
    return this.products.findIndex(p => p.sku == product.sku);
  }

  replaceProduct(updatedProduct: Product) {
    const index: number = this.findProduct(updatedProduct);
    if(index > -1) {
      this.products[index] = updatedProduct;
    }
  }

}
