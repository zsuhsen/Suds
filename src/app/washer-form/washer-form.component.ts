import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {

  washerFormCounter = 0;
  user: firebase.User;
  washerForm: FormGroup;

  constructor(public authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
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
    this.washerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      phonenumber: ['', Validators.required],
      dob: ['', Validators.required],
      ssn: ['', Validators.required],
      dlphoto: ['', Validators.required],
      newsletter: ['', Validators.required]
    });
  }

  incrementWasherFormCounter() {

    this.washerFormCounter++;

  }

  decrementWasherFormCounter() {

    this.washerFormCounter--;

  }
  onSubmit(value) {
    this.us.updateForWasherInfo(value, this.user.uid).then(res => {
      console.log(res);
      this.router.navigate(['/profile']);
    });
  }
}
