import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(e: Event) {
    console.log('first');
    console.log(e.target);
    this.notify.emit(e.target);
  }
}
