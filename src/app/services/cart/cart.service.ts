import { Injectable } from '@angular/core';
import {Product} from '../../components/item-row/product';
import {CartModel, ProductInCart} from '../../components/cart/model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartModel = {
    products: [],
  };
  constructor() { }

  addToCart(product: ProductInCart) {
    const searchResult = this.cart.products.find(value => value.product.identifier === product.product.identifier);

    if (searchResult) {
      searchResult.amount++;
    } else {
      this.cart.products.push(product);
    }
  }

  getItems() {
    return this.cart;
  }

  deleteItem(product: ProductInCart) {
    const index = this.cart.products.indexOf(product);
    if (index > -1) {
      this.cart.products.splice(index, 1);
    }
  }

  clearCart() {
    this.cart.products = [];
    return this.cart;
  }
}
