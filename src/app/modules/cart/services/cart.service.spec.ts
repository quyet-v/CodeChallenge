import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from 'src/app/models/Product';

fdescribe('CartService', () => {
  let service: CartService;
  let expectedCart: Product[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    expectedCart = [
      {
        id: 1,
        sku: "ABC",
        name: "Laptop",
        description: "Cool Laptop",
        price: 10,
        quantity: 2
      },
      {
        id: 2,
        sku: "BCD",
        name: "Fan",
        description: "Cool Laptop",
        price: 50,
        quantity: 2
      },
      {
        id: 3,
        sku: "DEF",
        name: "Fan",
        description: "Cool Laptop",
        price: 100,
        quantity: 2
      }
    ]
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return an array with 3 products in it', () => {

    service.setCart(expectedCart);
    const actual = service.getCart();
    expect(actual.length).toBe(3);
    expect(actual[0].sku).toBe("ABC");
  });

  fit('should return an array with 0 products in it', () => {
    const expectedCart: Product[] = []

    service.setCart(expectedCart);
    const actual = service.getCart();
    expect(actual.length).toBe(0);
  });

  fit('product should be added to cart', () => {
    const newProduct: Product = {
      id: 3,
      sku: "DEF",
      name: "Fan",
      description: "Cool Laptop",
      price: 1,
      quantity: 1
    }

    service.addProduct(newProduct);
    const actual = service.getCart();
    expect(actual.length).toBe(1);
    expect(actual[0].sku).toBe("DEF");
  });

  fit('product should be added to cart', () => {
    const newProduct: Product = {
      id: 3,
      sku: "DEF",
      name: "Fan",
      description: "Cool Laptop",
      price: 1,
      quantity: 1
    }

    service.addProduct(newProduct);
    const actual = service.getCart();
    expect(actual.length).toBe(1);
    expect(actual[0].sku).toBe("DEF");
  });

  fit('should find the right index of product in cart', () => {
    
    const product: Product = {
      id: 3,
      sku: "DEF",
      name: "Fan",
      description: "Cool Laptop",
      price: 1,
      quantity: 1
    }
    service.setCart(expectedCart);
    const actual = service.findIndex(product);
    expect(actual).toBe(2);
  });

  fit('should return -1 for item not in cart', () => {
    
    const product: Product = {
      id: 4,
      sku: "HFG",
      name: "Monitor",
      description: "Cool Monitor",
      price: 1,
      quantity: 1
    }
    service.setCart(expectedCart);
    const actual = service.findIndex(product);
    expect(actual).toBe(-1);
  });

  fit('testing cart is empty, should return true', () => {
    
    expectedCart = [];
    service.setCart(expectedCart);
    const actual = service.isCartEmpty();
    expect(actual).toBeTruthy();
  });

  fit('testing cart is empty, should return false', () => {
    
    service.setCart(expectedCart);
    const actual = service.isCartEmpty();
    expect(actual).toBeFalsy();
  });

  fit('cart should be cleared', () => {
    
    service.setCart(expectedCart);
    service.clearCart();
    const actualCart = service.getCart();
    expect(actualCart.length).toBe(0);
  });

  fit('exisiting product should be removed from cart', () => {
    
    const product: Product = {
      id: 1,
      sku: "ABC",
      name: "Laptop",
      description: "Cool Laptop",
      price: 1,
      quantity: 2
    }

    service.setCart(expectedCart);
    service.removeProduct(product);
    const actualCart = service.getCart();
    expect(actualCart.length).toBe(2);
  });

  fit('cart should be the same when not exisitng product is removed', () => {
    
    const product: Product = {
      id: 10,
      sku: "DJA",
      name: "Shirt",
      description: "Cool Shirt",
      price: 1,
      quantity: 2
    }

    service.setCart(expectedCart);
    service.removeProduct(product);
    const actualCart = service.getCart();
    expect(actualCart.length).toBe(3);
  });

  fit('should calculate the correct total for the cart', () => {
    
    service.setCart(expectedCart);
    const actualTotal = service.calculateTotal();
    expect(actualTotal).toBe(320);
  });
});
