import { Injectable } from '@angular/core';
import {Product} from '../../components/item-row/product';

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

  deleteItem(product: Product) {
    const index = this.items.indexOf(product);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
