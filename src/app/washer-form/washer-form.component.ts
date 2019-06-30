import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {
  washerForm: any;
  validationMessages: any;
  selected: any;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  onSubmit(value) {

  }
}
