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
        password: value.password,
        age: value.age,
        zipcode: value.zipcode,
        gender: value.gender,
        employmentStatus: value.employmentStatus,
        incomeRange: value.incomeRange,
        availabilityDays: value.availabilityDays,
        availabilityHours: value.availabilityHours,
        dryerAgeRange: value.dryerAgeRange,
        vehicleAccess: value.vehicleAccess,
        carry20Pounds: value.carry20Pounds,
        newsletter: value.newsletter,
        userType: 'washer' /** we want this to show what type of user they are */
      });
    }
    createUser(value) {
      return this.db.collection('users').add({
        fname: value.fname,
        lname: value.lname,
        email: value.email,
        password: value.password,
        age: value.age,
        zipcode: value.zipcode,
        gender: value.gender,
        employmentStatus: value.employmentStatus,
        incomeRange: value.incomeRange,
        laundryPlace: value.laundryPlace,
        laundryFrequency: value.laundryFrequency,
        laundryType: value.laundryType,
        newsletter: value.newsletter,
        userType: 'user'
      });
    }
    updateUser() {}
    deleteUser() {}
    getWashers() {}
    getUsers() {}
}
