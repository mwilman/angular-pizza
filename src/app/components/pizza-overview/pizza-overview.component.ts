import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import {CartService} from '../../services/cart/cart.service';
import {ProductInCart} from '../cart/model/cart.model';

@Component({
  selector: 'app-pizza-overview',
  templateUrl: './pizza-overview.component.html',
  styleUrls: ['./pizza-overview.component.scss']
})
export class PizzaOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'pizza');
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onNotify(product: ProductInCart) {
    // product.size = size;
    this.cartService.addToCart(product);
  }
}
