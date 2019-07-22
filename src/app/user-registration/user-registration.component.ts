import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  user: firebase.User;
  validationMessages = {
    fname: [
      { type: 'required', message: 'First name is required.' }
    ],
    lname: [
      { type: 'required', message: 'Last name is required.' }
    ]
  };
  constructor(private fb: FormBuilder,
              private router: Router,
              public authService: AuthService,
              private us: UserServiceService) { }

  ngOnInit() {
    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
      });
    this.createForm();
  }
  createForm() {
    this.userForm = this.fb.group({
      fname: ['', Validators.required ],
      lname: ['', Validators.required ],
      gender: ['male'],
      employmentStatus: ['none'],
      incomeRange: ['range1'],
      laundryPlace: ['home'],
      laundryFrequency: ['1perweek'],
      laundryType: ['basics'],
      newsletter: ['subscribe']
    });
  }
  resetFields() {
    this.userForm = this.fb.group({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      gender: new FormControl('male'),
      employmentStatus: new FormControl('none'),
      incomeRange: new FormControl('range1'),
      laundryPlace: new FormControl('home'),
      laundryFrequency: new FormControl('1perweek'),
      laundryType: new FormControl('basics'),
      newsletter: new FormControl('subscribe')
    });
  }
  onSubmit(value) {
    this.us.userFormInfo(value, this.user.uid).then(
      res => {
        this.resetFields();
        this.router.navigate(['/']);
      }
    );
  }

}
