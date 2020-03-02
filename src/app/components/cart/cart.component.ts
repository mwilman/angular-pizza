import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../item-row/product';
import {CartService} from '../../services/cart/cart.service';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<Product>;
  constructor(public cartService: CartService) { }

  products: Product[] = this.cartService.getItems();

  columnsToDisplay = ['identifier', 'description', 'price', 'delete-button'];
  columnsToDisplayTotal = ['description', 'price'];

  ngOnInit(): void {
  }

  deleteItem(product: Product) {
    this.cartService.deleteItem(product);
    this.table.renderRows();
  }

  getTotalCost() {
    return this.products.map(product => product.price)
      .reduce((acc, value) => acc + value, 0);
  }
}
