import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {
  washerForm: FormGroup;
  validationMessages: {
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
              private userService: UserServiceService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.washerForm = this.fb.group({
      fname: [''],
      lname: [''],
      email: [''],
      password: [''],
      age: [''],
      zipcode: [''],
      gender: [''],
      employmentStatus: [''],
      incomeRange: [''],
      availabilityDays: [''],
      availabilityHours: [''],
      dryerAgeRange: [''],
      vehicleAccess: [''],
      carry20Pounds: [''],
      newsletter: ['']
    });
  }
  resetFields() {
    this.washerForm = this.fb.group({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      age: new FormControl(''),
      zipcode: new FormControl(''),
      gender: new FormControl(''),
      employmentStatus: new FormControl(''),
      incomeRange: new FormControl(''),
      availabilityDays: new FormControl(''),
      availabilityHours: new FormControl(''),
      dryerAgeRange: new FormControl(''),
      vehicleAccess: new FormControl(''),
      carry20Pounds: new FormControl(''),
      newsletter: new FormControl('')
    });
  }

  onSubmit(value) {
    this.userService.createWasher(value);
    this.resetFields();
  }
}
