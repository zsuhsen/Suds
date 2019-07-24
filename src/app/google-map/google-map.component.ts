import { Component, OnInit } from '@angular/core';
import {MapsService} from '../maps.service';
import {UserServiceService} from '../services/user-service.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})


export class GoogleMapComponent implements OnInit {


  lat: string;
  lng: string;
  locations: Array<any>;

  constructor(private map: MapsService,
              private us: UserServiceService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;


    });

    this.us.getWashers().subscribe(results => {
      this.locations = results;
    });

  }


}
