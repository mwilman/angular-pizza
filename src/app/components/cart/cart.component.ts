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

  products: CartModel = this.cartService.getItems();

  columnsToDisplay = ['identifier', 'description', 'price', 'delete-button'];
  columnsToDisplayTotal = ['description', 'price'];

  ngOnInit(): void {
    console.log(this.products);
  }

  deleteItem(product: ProductInCart) {
    this.cartService.deleteItem(product);
    this.table.renderRows();
  }

  getTotalCost() {
    return this.products.products.map(productInCart => productInCart.product.price * productInCart.amount)
      .reduce((acc, value) => acc + value, 0);
  }
}
