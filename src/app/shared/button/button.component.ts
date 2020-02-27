import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() color: 'primary' | 'accent' | 'warn';
  @Output() notify = new EventEmitter();
  @Input() disabled: boolean;

  ngOnInit(): void {
  }

}
