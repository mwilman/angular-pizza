import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() options: string[];

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(e) {
    this.notify.emit(e.target.value);
  }
}
