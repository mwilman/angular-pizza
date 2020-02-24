import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizza-row',
  templateUrl: './pizza-row.component.html',
  styleUrls: ['./pizza-row.component.scss']
})
export class PizzaRowComponent implements OnInit {

  @Input() identifier: string;
  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
