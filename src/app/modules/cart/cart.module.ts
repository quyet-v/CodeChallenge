import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ItemComponent } from './components/item/item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,
    ItemsComponent,
    CheckoutComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
