import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


interface Location {

  latitude: string;
  longitude: string;

}

@Injectable({
  providedIn: 'root'
})


export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {

    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=a079babeef2082dea937e226cf794f64')
  }

}
