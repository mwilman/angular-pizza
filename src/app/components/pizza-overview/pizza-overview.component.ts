import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-pizza-overview',
  templateUrl: './pizza-overview.component.html',
  styleUrls: ['./pizza-overview.component.scss']
})
export class PizzaOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'pizza');
  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Notify');
  }
}
