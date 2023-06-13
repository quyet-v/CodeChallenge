import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() order?: Order;

  

}
