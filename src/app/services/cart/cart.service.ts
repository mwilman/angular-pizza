import {Inject, Injectable} from '@angular/core';
import {CartModel, ProductInCart} from '../../components/cart/model/cart.model';
import {SESSION_STORAGE, WebStorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // TODO Observable
  public cart: CartModel;

  constructor(@Inject(SESSION_STORAGE) private storageService: WebStorageService ) {
    this.cart = this.storageService.get('cart') ? this.storageService.get('cart') : {products: []};
  }

   addToCart(product: ProductInCart) {
    const searchResult = this.findProductInCart(product);

    if (searchResult) {
      searchResult.amount++;
    } else {
      this.cart.products.push(product);
    }
    this.updateStorage();
  }

  getItems(): CartModel {
    return this.storageService.get('cart');
  }

  reduceAmount(item: ProductInCart) {
    if (item.amount > 1) {
      item.amount--;
    } else {
      this.deleteItem(item);
    }
    this.updateStorage();
  }

  deleteItem(item: ProductInCart) {
    this.cart.products = this.cart.products.filter(currentItem => currentItem.product.identifier !== item.product.identifier);
    this.updateStorage();
  }

  clearCart() {
    this.cart.products = [];
    this.updateStorage();
    return this.cart;
  }

  findProductInCart(product: ProductInCart) {
    return this.cart.products.find(value => value.product.identifier === product.product.identifier);
  }

  updateAmount(item: ProductInCart, amount: number) {
    item.amount = amount;
    this.updateStorage();
  }

  updateStorage() {
    this.storageService.set('cart', this.cart);
  }
}
