import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = {
    email: '',
    password: ''
  };


  constructor(private router: Router, private us: UserServiceService) { }

  ngOnInit() {
  }

}
