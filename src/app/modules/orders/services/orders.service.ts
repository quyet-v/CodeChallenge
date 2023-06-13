import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: Order[] = [];

  constructor(private http: HttpClient) { }

  /**
   * getOrder method
   * makes a GET request to the mock API
   * to endpoint http://localhost:3000/orders
   * 
   * @returns Observable<Order[]>
   * 
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:3000/orders");
  }

  /**
   * 
   * @param order - order to add to DB
   * @returns Observable<Order>
   */
  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>("http://localhost:3000/orders",order);
  }
}
