import { Injectable } from '@angular/core';
import {Product} from '../components/item-row/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
