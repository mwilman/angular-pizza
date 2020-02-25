import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-schnitzel-overview',
  templateUrl: './schnitzel-overview.component.html',
  styleUrls: ['./schnitzel-overview.component.scss']
})
export class SchnitzelOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'schnitzel');

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Order');
  }
}
