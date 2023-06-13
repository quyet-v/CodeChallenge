import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  openChange: Subject<boolean> = new Subject<boolean>();
  productChange: Subject<Product> = new Subject<Product>();

  constructor() { }

  setOpenChange(openState: boolean) {
    this.openChange.next(openState);
  }

  setProductChange(product: Product) {
    this.productChange.next(product);
  }

}
