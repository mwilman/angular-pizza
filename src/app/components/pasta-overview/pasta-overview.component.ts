import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {CartService} from '../../services/cart/cart.service';
import {ProductService} from '../../services/products/product.service';
import {filter, map, take} from 'rxjs/operators';
import {Product} from '../item-row/product';

@Component({
  selector: 'app-pasta-overview',
  templateUrl: './pasta-overview.component.html',
  styleUrls: ['./pasta-overview.component.scss']
})
export class PastaOverviewComponent implements OnInit {
  //products = products.filter(product => product.type === 'pasta');
  products$ = this.data.getProducts().pipe(
    map((products) => {
     return products.filter((product) => product.type === 'pasta');
    })
  );
  constructor(public cartService: CartService, private data: ProductService) { }

  ngOnInit(): void {
  }

  onNotify(product) {
    this.cartService.addToCart(product);
  }
}
