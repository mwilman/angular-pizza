import { Component, OnInit } from '@angular/core';
import {Product} from '../item-row/product';
import {products} from '../products';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-long-overview',
  templateUrl: './all-overview.component.html',
  styleUrls: ['./all-overview.component.scss']
})
export class AllOverviewComponent implements OnInit {
  products: Product[] = products;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onNotify(product) {
    this.cartService.addToCart(product);
  }

}
