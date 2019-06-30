import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public db: AngularFirestore) {}

  createWasher(value) {
      return this.db.collection('users').add({
      fname: value.fname,
      lname: value.lname,
      email: value.email,
      age: value.age,
      gender: value.gender,
      employmentStatus: value.employmentStatus,
      incomeRange: value.incomeRange,
      usertype: value.usertype,
      availabilityDays: value.gender,
      availabilityHours: value.gender,
      dryerAgeRange: value.gender,
      vehicleAccess: value.gender,
      carry20Pounds: value.gender,
    });
  }

}
