import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/modules/products/services/products.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    openState: boolean = false;
    product?: Product;

    @ViewChild("sku") skuInput?: ElementRef;
    @ViewChild("name") nameInput?: ElementRef;
    @ViewChild("description") descriptionInput?: ElementRef;
    @ViewChild("price") priceInput?: ElementRef;

    constructor(private dialogService: DialogService, private productService: ProductsService) { }

    ngOnInit() {
        //Subscribe to openState changes 
        this.dialogService.openChange.subscribe(state => {
            this.openState = state;
        })

        /**
         * Subscribe to product changes so that when admins
         * click edit it will use the new product in HTML template
         */
        this.dialogService.productChange.subscribe(newProduct => {
            this.product = newProduct;
        })
    }

    /**
     * handleSave method
     * uses the current product and updates 
     * information for the product
     * 
     * @param e input event
     */
    handleSave(e: Event) {
        e.preventDefault();

        if(this.product) {
            const updatedProduct: Product = {
                id: this.product?.id,
                sku: this.skuInput?.nativeElement.value,
                name: this.nameInput?.nativeElement.value,
                description: this.descriptionInput?.nativeElement.value,
                price: this.priceInput?.nativeElement.value,
            }

            //Uses service method and updates product in DB.
            this.productService.updateProduct(updatedProduct).subscribe(res => {
                console.log(res);
            })

            /**
             * Replace the original product with the updated product
             * to rerender
             */
            this.productService.replaceProduct(updatedProduct);
            this.dialogService.setOpenChange(false);
            alert("Product updated!");
        }
    }

    /**
     * handleCose method
     * closes the dialog for editting information
     */
    handleClose() {
        this.dialogService.setOpenChange(false);
    }
}


