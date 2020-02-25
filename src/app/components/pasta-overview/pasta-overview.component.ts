import { Component, OnInit } from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-pasta-overview',
  templateUrl: './pasta-overview.component.html',
  styleUrls: ['./pasta-overview.component.scss']
})
export class PastaOverviewComponent implements OnInit {
  products = products.filter(product => product.type === 'pasta');

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Order');
  }
}
