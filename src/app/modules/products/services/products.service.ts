import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Product } from "src/app/models/Product";

@Injectable({
    providedIn: "root"
})
export class ProductsService {
    products: Product[] = [];
    // productsChange: Subject<Product[]> = new Subject<Product[]>();

    constructor (private http: HttpClient) { }

    /**
   * getProducts method
   * makes a GET request to mock API and gets all products
   * from DB.
   *
   * @returns Observable<Product[]>
   */
    getProducts (): Observable<Product[]> {
        return this.http.get<Product[]>("http://localhost:3000/products");
    }

    /**
   * setProducts method
   * takes product array and set current product array to new product array
   */
    setProducts (products: Product[]) {
        this.products = products;
    }

    /**
   * updateProduct method
   * takes updated product via params
   * and makes PUT request to update item.
   *
   * @param updatedProduct - product to update
   * @returns Observable<Product>
   */
    updateProduct (updatedProduct: Product): Observable<Product> {
        return this.http.put<Product>(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct);
    }

    /**
   * findProduct method
   * uses product passed via params and find index

   * @param product - product to find
   * @returns index of product
   */
    findProduct (product: Product): number {
        return this.products.findIndex(p => p.sku == product.sku);
    }

    /**
   * replaceProduct method
   * uses findProduct to get index and replaces product in array
   * with updated product.
   *
   * Mainly to rerender the products page after editing information.
   *
   * @param updatedProduct - product to replace
   */
    replaceProduct (updatedProduct: Product) {
        const index: number = this.findProduct(updatedProduct);
        // IF product exists
        if (index > -1) {
            this.products[index] = updatedProduct;
        }
    }
}
