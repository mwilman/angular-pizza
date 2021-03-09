import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import { products } from '../products';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks-overview.component.html',
  styleUrls: ['./snacks-overview.component.scss']
})
export class SnacksOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'snacks');

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

   onNotify(product) {
     this.cartService.addToCart(product);
   }
}
