import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {
  washerForm: FormGroup;
  validationMessages: any;
  selected: any;

  constructor(private fb: FormBuilder,
              private userService: UserServiceService) { }

  ngOnInit() {
  }
  createForm() {
    this.washerForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ]
    });
  }
  resetFields() {
    this.washerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  onSubmit(value) {
    this.userService.createWasher(value);
    this.resetFields();
  }
}
