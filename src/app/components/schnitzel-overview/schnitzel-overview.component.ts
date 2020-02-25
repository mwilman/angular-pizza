import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schnitzel-overview',
  templateUrl: './schnitzel-overview.component.html',
  styleUrls: ['./schnitzel-overview.component.scss']
})
export class SchnitzelOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNotify() {
    alert('Order');
  }
}
