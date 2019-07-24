import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {FirebaseUserModel} from '../model/user.model';
import {MapsService} from '../maps.service';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: firebase.User;
  lat: string;
  lng: string;
  items: Array<any>;
  userInfo: Array<any>;
  // tslint:disable-next-line:max-line-length
  defaultProfile = 'https://firebasestorage.googleapis.com/v0/b/suds-delivery.appspot.com/o/uploads%2Fsudslogostraight.png?alt=media&token=001b9dff-f21f-4d5b-be44-aca418c35a4b';

  profileForm: FormGroup;
  constructor( public userService: UserService,
               public us: UserServiceService,
               public authService: AuthService,
               private route: ActivatedRoute,
               private location: Location,
               private router: Router,
               private fb: FormBuilder,
               private map: MapsService) {}


  ngOnInit(): void {
    // what is this doing?
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
        this.us.getUserDoc(this.user.uid).subscribe(result => {
          this.userInfo = result;
        });
      });
    this.map.getLocation().subscribe(data => {

      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;

    });


  }
  availability() {
    this.us.addLatLng(this.lat, this.lng, this.user.uid);
  }
  testUpdate() {
    this.us.editFieldTest(this.user.uid);
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
