import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {

  @Input() product: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
