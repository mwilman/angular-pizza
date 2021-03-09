import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-pasta-overview',
  templateUrl: './pasta-overview.component.html',
  styleUrls: ['./pasta-overview.component.scss']
})
export class PastaOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'pasta');

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onNotify(product) {
    this.cartService.addToCart(product);
  }
}
