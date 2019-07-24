import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clothing-quantities',
  templateUrl: './clothing-quantities.component.html',
  styleUrls: ['./clothing-quantities.component.css']
})
export class ClothingQuantitiesComponent implements OnInit {

  table1: boolean = true;
  table2: boolean = false;
  table3: boolean = false;

  //Upper Body Clothes

  TshirtCount: number = 0;
  TshirtPrice: number = 1;

  longSleeveCount: number = 0;
  longSleevePrice: number = 1.25;

  tankTopCount: number = 0;
  tankTopPrice: number = .75;

  buttonDownCount: number = 0;
  buttonDownPrice: number = 1.10;

  sweaterCount: number = 0;
  sweaterPrice: number = 1.50;


  //Lower Body Clothes
  shortsCount: number = 0;
  shortsPrice: number = 1;

  pantsCount: number = 0;
  pantsPrice: number = 1.25;

  jeansCount: number = 0;
  jeansPrice: number = 1.30;

  underwearCount: number = 0;
  underwearPrice: number = 0.50;

  socksCount: number = 0;
  socksPrice: number = 0.20


  //Other washables

  comforterCount: number = 0;
  comforterPrice: number = 2;

  blanketCount: number = 0;
  blanketPrice: number = 1.50;

  tableClothCount: number = 0;
  tableClothPrice: number = 1;

  pillowCaseCount: number = 0;
  pillowCasePrice: number = .50;




  @Input() washerIdchild: string;
  constructor() { }

  ngOnInit() {
  }

  //t shirt methods

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

  //long sleeve methods

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

  //tank top methods


  incrementtankTopCount() {
    this.tankTopCount++;
  }

  decrementtankTopCount() {
    if(this.tankTopCount != 0) {
      this.tankTopCount--;
    }

  }


  getTankTopPrice() {

    return this.tankTopCount * this.tankTopPrice;

  }

  getTankTopCount() {
    return this.tankTopCount;
  }

  //button down methods


  incrementbuttonDownCount() {
    this.buttonDownCount++;
  }

  decrementbuttonDownCount() {
    if(this.buttonDownCount != 0) {
      this.buttonDownCount--;
    }

  }


  getButtonDownPrice() {

    return this.buttonDownCount * this.buttonDownPrice;

  }

  getButtonDownCount() {
    return this.buttonDownCount;
  }

  //sweater methods



  incrementSweaterCount() {
    this.sweaterCount++;
  }

  decrementSweaterCount() {
    if(this.sweaterCount != 0) {
      this.sweaterCount--;
    }

  }

  getSweaterPrice() {

    return this.sweaterCount * this.sweaterPrice;

  }

  getSweaterCount() {
    return this.sweaterCount;
  }


  //shorts methods


  incrementShortCount() {
    this.shortsCount++;
  }

  decrementShortCount() {
    if(this.shortsCount != 0) {
      this.shortsCount--;
    }

  }

  getShortPrice() {

    return this.shortsCount * this.shortsPrice;

  }

  getShortCount() {
    return this.shortsCount;
  }

  //pants methods


  incrementPantsCount() {
    this.pantsCount++;
  }

  decrementPantsCount() {
    if(this.pantsCount != 0) {
      this.pantsCount--;
    }

  }

  getPantsPrice() {

    return this.pantsCount * this.pantsPrice;

  }

  getPantsCount() {
    return this.pantsCount;
  }

  //jeans methods

  incrementJeansCount() {
    this.jeansCount++;
  }

  decrementJeansCount() {
    if(this.jeansCount != 0) {
      this.jeansCount--;
    }

  }

  getJeansPrice() {

    return this.jeansCount * this.jeansPrice;

  }

  getJeansCount() {
    return this.jeansCount;
  }

  //underwear methods

  incrementUnderCount() {
    this.underwearCount++;
  }

  decrementUnderCount() {
    if(this.underwearCount != 0) {
      this.underwearCount--;
    }

  }

  getUnderPrice() {

    return this.underwearCount * this.underwearPrice;

  }

  getUnderCount() {
    return this.underwearCount;
  }

  //socks methods

  incrementSocksCount() {
    this.socksCount++;
  }

  decrementSocksCount() {
    if(this.socksCount != 0) {
      this.socksCount--;
    }

  }

  getSocksPrice() {

    return this.socksCount * this.socksPrice;

  }

  getSocksCount() {
    return this.socksCount;
  }

  //comforter methods


  incrementComforterCount() {
    this.comforterCount++;
  }

  decrementComforterCount() {
    if(this.comforterCount != 0) {
      this.comforterCount--;
    }

  }

  getComforterPrice() {

    return this.comforterCount * this.comforterPrice;

  }

  getComforterCount() {
    return this.comforterCount;
  }

  //blanket methods

  incrementBlanketCount() {
    this.blanketCount++;
  }

  decrementBlanketCount() {
    if(this.blanketCount != 0) {
      this.blanketCount--;
    }

  }

  getBlanketPrice() {

    return this.blanketCount * this.blanketPrice;

  }

  getBlanketCount() {
    return this.blanketCount;
  }

  //table cloth methods

  incrementTableClothCount() {
    this.tableClothCount++;
  }

  decrementTableClothCount() {
    if(this.tableClothCount != 0) {
      this.tableClothCount--;
    }

  }

  getTableClothPrice() {

    return this.tableClothCount * this.tableClothPrice;

  }

  getTableClothCount() {
    return this.tableClothCount;
  }

  //pillow case methods

  incrementPillowCaseCount() {
    this.pillowCaseCount++;
  }

  decrementPillowCaseCount() {
    if(this.pillowCaseCount != 0) {
      this.pillowCaseCount--;
    }

  }

  getPillowCasePrice() {

    return this.pillowCaseCount * this.pillowCasePrice;

  }

  getPillowCaseCount() {
    return this.pillowCaseCount;
  }


  gettotalPrice() {

   return this.getTshirtPrice() + this.getLongSleevePrice() + this.getTankTopPrice()
     + this.getSweaterPrice() + this.getButtonDownPrice() + this.getShortPrice()
     + this.getPantsPrice() + this.getJeansPrice() + this.getUnderPrice()
     + this.getSocksPrice() + this.getComforterPrice() + this.getBlanketPrice()
     + this.getTableClothPrice() + this.getPillowCasePrice();

  }

  clearCart() {


    this.TshirtCount = 0;
    this.longSleeveCount = 0;
    this.tankTopCount = 0;
    this.buttonDownCount= 0;
    this.sweaterCount = 0;
    //Lower Body Clothes
    this.shortsCount = 0;
    this.pantsCount = 0;
    this.jeansCount = 0;
    this.underwearCount = 0;
    this.socksCount = 0;
    //Other washables
    this.comforterCount = 0;
    this.blanketCount = 0;
    this.tableClothCount= 0;
    this.pillowCaseCount= 0;

  }
  showTable1() {

    this.table1 = true;
    this.table2 = false;
    this.table3 = false;

  }

  showTable2() {


    this.table1 = false;
    this.table2 = true;
    this.table3 = false;

  }

  showTable3() {

    this.table1 = false;
    this.table2 = false;
    this.table3 = true;
  }

}
