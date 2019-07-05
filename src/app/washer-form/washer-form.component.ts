import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {
  washerForm: FormGroup;
  validationMessages = {
    fname: [
      { type: 'required', message: 'First name is required.' }
    ],
    lname: [
      { type: 'required', message: 'Last name is required.' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ],
    age: [
      { type: 'required', message: 'Age is required.' }
    ],
    zipcode: [
      { type: 'required', message: 'Zipcode is required.' }
    ]
  };

  constructor(private fb: FormBuilder,
              private router: Router,
              private us: UserServiceService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.washerForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      age: ['', Validators.required ],
      zipcode: ['', Validators.required ],
      gender: ['male'],
      employmentStatus: ['none'],
      incomeRange: ['range1'],
      availabilityDays: ['1day'],
      availabilityHours: ['hrs02'],
      dryerAgeRange: ['yr03'],
      vehicleAccess: ['no'],
      carry20Pounds: ['no'],
      newsletter: ['subscribe']
    });
  }
  resetFields() {
    this.washerForm = this.fb.group({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      employmentStatus: new FormControl('none'),
      incomeRange: new FormControl('range1'),
      availabilityDays: new FormControl('1day'),
      availabilityHours: new FormControl('hrs02'),
      dryerAgeRange: new FormControl('yr03'),
      vehicleAccess: new FormControl('no'),
      carry20Pounds: new FormControl('no'),
      newsletter: new FormControl('subscribe')
    });
  }
  onSubmit(value) {
    this.us.createWasher(value).then(
      res => {
        this.resetFields();
        this.router.navigate(['/login']);
      }
    );
  }
}
