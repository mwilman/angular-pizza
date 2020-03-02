import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  options = ['Allgemein', 'Technik', 'Bestellung'];

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: [''],
    message: ['', Validators.required],
    category: ['allgemein'],
  });
  sended = false;

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.sended = true;
  }

  onChange(e) {
    this.form.get('category').setValue(e);
  }
}
