import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clothing-quantities',
  templateUrl: './clothing-quantities.component.html',
  styleUrls: ['./clothing-quantities.component.css']
})
export class ClothingQuantitiesComponent implements OnInit {

  @Input() washerIdchild: string;
  constructor() { }

  ngOnInit() {
  }

}
