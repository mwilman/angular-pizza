import {Injectable} from '@angular/core';
import {CartModel, ProductInCart} from '../../components/cart/model/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartModel = {
    products: [],
  };

  constructor() {
  }

  addToCart(product: ProductInCart) {
    const searchResult = this.findProductInCart(product);

    if (searchResult) {
      searchResult.amount++;
    } else {
      this.cart.products.push(product);
    }
  }

  getItems() {
    return this.cart;
  }

  deleteItem(item: ProductInCart) {
    if (item.amount > 1) {
      item.amount--;
    } else {
      this.cart.products = this.cart.products.filter(currentItem => currentItem.product.identifier !== item.product.identifier);
    }
  }

  clearCart() {
    this.cart.products = [];
    return this.cart;
  }

  findProductInCart(product: ProductInCart) {
    return this.cart.products.find(value => value.product.identifier === product.product.identifier);
  }
}
