import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { type Product } from "../models/Product";

@Injectable({
    providedIn: "root"
})
export class DialogService {
    openChange: Subject<boolean> = new Subject<boolean>();
    productChange: Subject<Product> = new Subject<Product>();

    constructor () { }

    /**
     * setOpenState method
     * emits a new openState for subscribers
     *
     * @param openState - new openstate
     */
    setOpenChange (openState: boolean) {
        this.openChange.next(openState);
    }

    /**
     * setProductChange method
     * emits a new product for subscribers
     *
     * @param openState - new openstate
     */
    setProductChange (product: Product) {
        this.productChange.next(product);
    }
}
