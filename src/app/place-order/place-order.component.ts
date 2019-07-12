import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClothingQuantitiesComponent} from '../clothing-quantities/clothing-quantities.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  items: Array<any>;
  pickWasher: FormGroup;
  message: string;
  constructor(private fb: FormBuilder,
              public us: UserServiceService,
              private router: Router) { }

  ngOnInit() {
    this.getWasherData();
    this.createForm();
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
