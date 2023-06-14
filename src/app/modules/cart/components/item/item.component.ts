import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    @Input() item: Product | undefined;

    /**
     * handleQuantityChange method
     * changes the quanity of a product in cart
     * 
     * @param e event
     */
    handleQuantityChange(e: Event) {
        const target = e.target;
        const input = target as HTMLInputElement;
        if(this.item && this.item.quantity) {
        this.item.quantity = parseInt(input.value);
        }
    }

    /**
     * handleType change
     * makes sure users cant type ito the quantity change input
     * 
     * @param e event
     */
    handleType(e: Event) {
        e.preventDefault();
    }
}
