import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

declare var FB: any;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  user: firebase.User;

  registerForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

    //this method checks whether or not a user is logged in and puts user detals in user.

    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;

      });




    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '635040696978282',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.6'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


  }




  createForm() {
    this.registerForm = this.fb.group({
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
  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

}
