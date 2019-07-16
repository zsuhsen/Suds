import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.css']
})
export class RegistrationInfoComponent implements OnInit {

  @Input() name: string;
  constructor(private router: Router,
              private fb: FormBuilder,
              public us: UserService) {}

  ngOnInit() {
  }

}
