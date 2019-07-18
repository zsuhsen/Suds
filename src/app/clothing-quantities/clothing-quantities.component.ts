import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clothing-quantities',
  templateUrl: './clothing-quantities.component.html',
  styleUrls: ['./clothing-quantities.component.css']
})
export class ClothingQuantitiesComponent implements OnInit {

  table1: boolean = false;
  table2: boolean = false;
  table3: boolean = false;

  TshirtCount: number = 0;
  TshirtPrice: number = 1;

  longSleeveCount: number = 0;
  longSleevePrice: number = 1.25;


  @Input() washerIdchild: string;
  constructor() { }

  ngOnInit() {
  }

  incrementTshirtCount() {
    this.TshirtCount++;
  }

  decrementTshirtCount() {
    if(this.TshirtCount != 0) {
      this.TshirtCount--;
    }

  }


  getTshirtPrice() {

    return this.TshirtCount * this.TshirtPrice;

  }

  getTshirtCount() {
    return this.TshirtCount;
  }

  incrementLongSleeveCount() {
    this.longSleeveCount++;
  }

  decrementLongSleeveCount() {
    if(this.longSleeveCount != 0) {
      this.longSleeveCount--;
    }

  }

  getLongSleevePrice() {
    return this.longSleeveCount * this.longSleevePrice
  }

  getLongSleeveCount() {
    return this.longSleeveCount;
  }


  showTable1() {
    if (!this.table1) {
      this.table1 = true;
    } else {
      this.table1 = false;

    }
  }

  showTable2() {
    if (!this.table2) {
      this.table2 = true;
    } else {
      this.table2 = false;

    }
  }

  showTable3() {
    if (!this.table3) {
      this.table3 = true;
    } else {
      this.table3 = false;

    }
  }

}
