import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washer-form',
  templateUrl: './washer-form.component.html',
  styleUrls: ['./washer-form.component.css']
})
export class WasherFormComponent implements OnInit {
  washerForm: any;
  validationMessages: any;
  selected: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {

  }
}
