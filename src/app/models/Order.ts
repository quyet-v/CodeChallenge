import { type Customer } from "./Customer";
import { type Product } from "./Product";

export interface Order {
  id?: number
  customer: Customer
  products: Product[]
  dateOrdered: Date
}
