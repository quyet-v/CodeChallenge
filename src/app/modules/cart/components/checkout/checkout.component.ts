import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrdersService } from 'src/app/modules/orders/services/orders.service';
import { Order } from 'src/app/models/Order';
import { Customer } from 'src/app/models/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  @ViewChild("firstname") firstname?: ElementRef;
  @ViewChild("lastname") lastname?: ElementRef; 
  @ViewChild("email") email?: ElementRef; 

  constructor(private orderService: OrdersService, private cartService: CartService, private router: Router) { }

  handleOrder(e: Event) {

    e.preventDefault();
    const target = e.target;
    const form = target as HTMLFormElement;
    
    //Already have required field for inputs,
    //But just another layer of protection
    if(form.checkValidity() && !this.cartService.isCartEmpty()) {
      const customer: Customer = {
        firstname: this.firstname?.nativeElement.value,
        lastname: this.lastname?.nativeElement.value,
        email: this.email?.nativeElement.value,
      }

      const newOrder: Order = {
        customer,
        products: this.cartService.getCart(),
        dateOrdered: new Date()
      }

      this.orderService.addOrder(newOrder).subscribe(response => {
        alert("Order placed!");
        this.cartService.clearCart();
        this.router.navigate(["/products"]);
      });
    }else {
      alert("Please add items into your cart or fill out the form!");
    }

  }


}
