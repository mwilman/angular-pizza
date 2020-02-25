import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-euro-display',
  templateUrl: './euro-display.component.html',
  styleUrls: ['./euro-display.component.scss']
})
export class EuroDisplayComponent implements OnInit {

  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
  }

}
