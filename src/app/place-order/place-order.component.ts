import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  items: Array<any>;
  constructor(public us: UserServiceService) { }

  ngOnInit() {
    this.getWasherData();
  }
  getWasherData() {
    this.us.getWashers().subscribe(result => {
      this.items = result;
    });
  }
  capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
