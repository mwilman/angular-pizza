import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() color: 'chocolate' | 'indianred' | 'orange';
  @Output() notify = new EventEmitter();

  ngOnInit(): void {
  }

}
