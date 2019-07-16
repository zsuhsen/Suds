import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {FirebaseUserModel} from '../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: firebase.User;


  profileForm: FormGroup;
  constructor( public userService: UserService,
               public authService: AuthService,
               private route: ActivatedRoute,
               private location: Location,
               private router: Router,
               private fb: FormBuilder) {}


  ngOnInit(): void {
    //what is this doing?
    // this.route.data.subscribe(routeData => {
    //   const data = routeData.data;
    //   if (data) {
    //     this.user = data;
    //     this.createForm(this.user.name);
    //   }
    // });

    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;

      });


  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value) {
    this.userService.updateCurrentUser(value)
      .then(res => {
        console.log(res);
      }, err => console.log(err));
  }


  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.router.navigate(['/']);
      }, (error) => {
        console.log('Logout error', error);
      });
  }
}
