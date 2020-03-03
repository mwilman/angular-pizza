import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../item-row/product';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductInCart} from '../cart/model/cart.model';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {
  columnsToDisplay = ['identifier', 'description', 'price', 'buy-button'];

  @Input() products: Product[];
  @Output() ordered = new EventEmitter();
  dataSource = new BehaviorSubject<AbstractControl[]>([]);
  rows = this.fb.array([]);
  form = this.fb.group({ products: this.rows});

  constructor(public snackBar: MatSnackBar, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.products.forEach((product: Product) => this.addRow(product, false));
    this.updateView();
  }

  onOrder(product: Product, note?: string) {
    this.snackBar.open(product.description + ' wurde hinzugefügt', undefined, {
      duration: 3000
    });
    const productInCart: ProductInCart = {
      amount: 1,
      product,
      note
    };
    console.log(productInCart);
    this.ordered.emit(productInCart);
  }

  addRow(d?: Product, noUpdate?: boolean) {
    const row = this.fb.group({
      identifier   : [d && d.identifier ? d.identifier : null, []],
      description     : [d && d.description   ? d.description   : null, []],
      price     : [d && d.price   ? d.price   : null, []]
    });
    this.rows.push(row);
    if (!noUpdate) { this.updateView(); }
  }

  updateView() {
    this.dataSource.next(this.rows.controls);
  }

}
