import { Component, OnInit } from '@angular/core';
import {Product} from '../item-row/product';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = this.cartService.getItems();

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
