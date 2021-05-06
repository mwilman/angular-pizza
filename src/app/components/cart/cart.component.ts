import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../item-row/product';
import {CartService} from '../../services/cart/cart.service';
import {MatTable} from '@angular/material/table';
import {CartModel, ProductInCart} from './model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Product>;
  constructor(public cartService: CartService) { }

  products: CartModel = this.cartService.cart;

  // TODO: AddFormControl for Amount

  columnsToDisplay = ['amount', 'identifier', 'description', 'price', 'item_total', 'delete-button'];
  columnsToDisplayTotal = ['description', 'item_total'];

  ngOnInit(): void {
    console.log(this.products);
  }

  reduceAmount(item: ProductInCart) {
    this.cartService.reduceAmount(item);
  }

  increaseAmount(item: ProductInCart) {
    this.cartService.addToCart(item);
  }

  deleteItem(product: ProductInCart) {
    this.cartService.deleteItem(product);
  }

  getTotalCost() {
    return this.products.products.map(productInCart => productInCart.product.price * productInCart.amount)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalItemCost(item: ProductInCart) {
    return item.product.price * item.amount;
  }

  onChange(item: ProductInCart, target) {
    const amount = target.value;
    this.cartService.updateAmount(item, amount);
  }
}
