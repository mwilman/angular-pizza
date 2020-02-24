import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss']
})
export class ItemRowComponent implements OnInit {

  @Input() identifier: string;
  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {
  }

}
