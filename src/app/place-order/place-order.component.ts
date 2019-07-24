import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {AuthService} from "../services/auth.service";
import {MapsService} from "../maps.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  user: firebase.User;
  items: Array<any>;
  userInfo: Array<any>;
  pickWasher: FormGroup;
  message: string;


  defaultProfile = 'https://firebasestorage.googleapis.com/v0/b/suds-delivery.appspot.com/o/uploads%2Fsudslogostraight.png?alt=media&token=001b9dff-f21f-4d5b-be44-aca418c35a4b';

  constructor(private fb: FormBuilder,
              public us: UserServiceService,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    this.getWasherData();
    this.createForm();

    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
        this.us.getUserDoc(this.user.uid).subscribe(result => {
          this.userInfo = result;
        });
      });

  }
  getWasherData() {
    this.us.getWashers().subscribe(result => {
      this.items = result;
    });
  }
  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  createForm() {
    this.pickWasher =  this.fb.group({
      washerId: ['']
    });
  }
  resetFields() {
    this.pickWasher = this.fb.group({
      washerId: new FormControl('')
    });
  }
  onSubmit(value) {
    this.resetFields();
    this.router.navigate(['/clothing']);
  }

}
