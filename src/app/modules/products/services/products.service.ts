import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/products/${updatedProduct.id}`,updatedProduct);
  }

}
