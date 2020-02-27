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
    category: ['pizza'],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.get('message').patchValue('Kleiner!');
  }

  onChange(e) {
    console.log(e);
    this.form.get('category').setValue(e);
    console.log(this.form.value);
  }
}
