import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasta-overview',
  templateUrl: './pasta-overview.component.html',
  styleUrls: ['./pasta-overview.component.scss']
})
export class PastaOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Order');
  }
}
