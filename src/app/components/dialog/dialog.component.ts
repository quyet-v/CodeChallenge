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
    this.dialogService.openChange.subscribe(state => {
      this.openState = state;
    })

    this.dialogService.productChange.subscribe(newProduct => {
      this.product = newProduct;
    })
  }

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

      this.productService.updateProduct(updatedProduct).subscribe(res => {
        console.log(res);
      })

    }

    




  }

}


