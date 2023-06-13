import { Customer } from "./Customer";
import { Product } from "./Product";

export interface Order {
    id?: number,
    customer: Customer,
    products: Product[],
    dateOrdered: Date   
}