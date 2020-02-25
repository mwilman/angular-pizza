import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks-overview.component.html',
  styleUrls: ['./snacks-overview.component.scss']
})
export class SnacksOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Order');
  }
}
