import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  errorMessage: string;


  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }
  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
          this.router.navigate(['/profile']);
        }, err => console.log(err)
      );
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
          this.router.navigate(['/profile']);
        }, err => console.log(err)
      );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
          this.router.navigate(['/profile']);
        }, err => console.log(err)
      );
  }
  tryLogin(value) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/profile']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }

}
