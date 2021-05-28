import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public amount = this.cartService.getAmount();
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
