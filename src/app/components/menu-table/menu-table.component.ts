import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../item-row/product';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductInCart} from '../cart/model/cart.model';
import {SizeType} from '../products';
import {MatSelectChange} from '@angular/material/select';
import {MatOption} from '@angular/material/core';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  columnsToDisplay = ['identifier', 'size', 'description', 'price', 'buy-button'];

  @Input() products: Product[];
  @Output() ordered = new EventEmitter();
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onOrder(product: Product, size?: SizeType, note?: string) {
    this.snackBar.open(product.description + ' wurde hinzugefügt', undefined, {
      duration: 3000
    });
    const productInCart: ProductInCart = {
      amount: 1,
      product,
      size,
      note
    };
    console.log(productInCart);
    this.ordered.emit(productInCart);
  }

  selected(event: MatSelectChange) {
    const selectedData = {
      text: (event.source.selected as MatOption).viewValue,
      value: event.source.value
    };
    console.log(selectedData);
  }

}
