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
      availabilityDays: value.availabilityDays,
      availabilityHours: value.availabilityHours,
      dryerAgeRange: value.dryerAgeRange,
      vehicleAccess: value.vehicleAccess,
      carry20Pounds: value.carry20Pounds
    });
  }

}
