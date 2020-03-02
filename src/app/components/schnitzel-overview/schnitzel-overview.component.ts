import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-schnitzel-overview',
  templateUrl: './schnitzel-overview.component.html',
  styleUrls: ['./schnitzel-overview.component.scss']
})
export class SchnitzelOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'schnitzel');

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onNotify(product) {
    this.cartService.addToCart(product);
  }
}
