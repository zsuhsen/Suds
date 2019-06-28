import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css']
})
export class NewsLetterComponent implements OnInit {
  newsLetterTable: FormGroup;
  validationMessages = {
    name: [
      { type: 'required', message: 'Name is required.' }
    ],
    email: [
      { type: 'required', message: 'Surname is required.' }
    ]
  };

  constructor(private fb: FormBuilder,
              public fs: FirebaseService) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.newsLetterTable = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }
  resetFields() {
    this.newsLetterTable = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }
  onSubmit(value) {
    this.fs.createSubscriber(value);
    this.resetFields();
  }
}
