import { Component, OnInit } from '@angular/core';
import {MapsService} from "../maps.service";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {


  lat: string = '';
  lng: string = '';

  constructor(private map: MapsService) { }

  ngOnInit() {

    this.map.getLocation().subscribe(data => {

      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;


    })

  }

}
