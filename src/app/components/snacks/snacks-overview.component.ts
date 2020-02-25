import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart/cart.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks-overview.component.html',
  styleUrls: ['./snacks-overview.component.scss']
})
export class SnacksOverviewComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  // onNotify(product) {
  //  this.cartService.addToCart(product);
  //  console.log(product);
  //  alert('Order');
  // }

  onNotify() {
    alert('Order');
  }
}
