import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../item-row/product';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  columnsToDisplay = ['identifier', 'description', 'price', 'buy-button'];

  @Input() products: Product[];
  @Output() ordered = new EventEmitter();
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onOrder(product: Product) {
    console.log(product);
    this.snackBar.open(product.description + ' wurde hinzugefügt', undefined, {
      duration: 3000
    });
    this.ordered.emit(product);
  }

}
