import { Component, OnInit } from '@angular/core';
import {Product} from '../item-row/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  products: Product[] = this.cartService.getItems();

  columnsToDisplay = ['identifier', 'description', 'price', 'delete-button'];

  ngOnInit(): void {
  }

  deleteItem(product: Product) {
    this.cartService.deleteItem(product);
    console.log('removing');
    console.log(product);
  }
}
