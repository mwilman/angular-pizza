import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    name: [''],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.get('message').patchValue('Kleiner!');
  }

}
