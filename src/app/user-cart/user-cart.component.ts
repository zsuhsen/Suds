import { Component, OnInit, Input  } from '@angular/core';
import { ClothingQuantitiesComponent} from "../clothing-quantities/clothing-quantities.component";

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  @Input() TshirtCount: number;

  @Input() longSleeveCount: number;

  @Input() tankTopCount: number;


  @Input()  buttonDownCount: number;


  @Input() sweaterCount: number;



  //Lower Body Clothes
  @Input() shortsCount: number;

  @Input() pantsCount: number;

  @Input() jeansCount: number;


  @Input() underwearCount: number;


  @Input() socksCount: number;



  //Other washables

  @Input() comforterCount: number;


  @Input() blanketCount: number;


  @Input() tableClothCount: number;


  @Input() pillowCaseCount: number;

  @Input() totalPrice: number;





  constructor(private cq: ClothingQuantitiesComponent) { }

  ngOnInit() {
  }

  clearCartChild() {
    this.cq.clearCart();

  }


}
