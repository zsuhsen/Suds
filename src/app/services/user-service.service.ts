import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  doc: Array<any>;
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
    userFormInfo(value, uid) {
      return this.db.collection('users').add({
        fname: value.fname,
        lname: value.lname,
        gender: value.gender,
        employmentStatus: value.employmentStatus,
        incomeRange: value.incomeRange,
        laundryPlace: value.laundryPlace,
        laundryFrequency: value.laundryFrequency,
        laundryType: value.laundryType,
        newsletter: value.newsletter,
        userType: 'user', /** we want this to show what type of user they are */
        userId: uid
      });
    }
    createBaseUser(uid, n, e) {
        return this.db.collection('users').add({
          name: n,
          email: e,
          userId: uid,
          userType: 'user',
          imageURL: null
        });
    }
  createGoogleBaseUser(uid, n, e) {
    let docId: any;
    this.getUserDoc(uid).subscribe(result => {
      docId = result.pop().payload.doc.id;
      this.db.collection('users').doc(docId).get().subscribe(docsnapshot => {
        if (!docsnapshot.exists) {
          return this.db.collection('users').add({
            name: n,
            email: e,
            userId: uid,
            userType: 'user',
            imageURL: null
          });
        }
      });
    });
  }
    updateForWasherInfo(value, uid) {
      let docId: any;
      this.getUserDoc(uid).subscribe(result => {
        docId = result.pop().payload.doc.id;
        return this.db.collection('users').doc(docId).update({
          address: 'address',
          city: 'city',
          state: 'state',
          zipcode: 'zip',
          phonenumber: 'phonenum',
          dob: 'birthdate',
          ssn: 'ssn',
          dlphoto: 'imageurl',
          newsLetter: 'subscribe'
        });
      });
    }
  usertest(uid) {
    let docId: any;
    this.getUserDoc(uid).subscribe(result => {
      docId = result.pop().payload.doc.id;
      return this.db.collection('users').doc(docId).update({
        testval: 'test'
      });
      });
  }
  editFieldTest(uid) {
    let docId: any;
    this.getUserDoc(uid).subscribe(result => {
      docId = result.pop().payload.doc.id;
      return this.db.collection('users').doc(docId).set({
        testval: 'anothertest'
      }, {merge: true});
    });
  }
  washerFormInfo(value, uid) {
    return this.db.collection('users').add({
      fname: value.fname,
      lname: value.lname,
      gender: value.gender,
      employmentStatus: value.employmentStatus,
      incomeRange: value.incomeRange,
      availabilityDays: value.availabilityDays,
      availabilityHours: value.availabilityHours,
      dryerAgeRange: value.dryerAgeRange,
      vehicleAccess: value.vehicleAccess,
      carry20Pounds: value.carry20Pounds,
      newsletter: value.newsletter,
      userType: 'washer', /** we want this to show what type of user they are */
      userId: uid,
      latitude: 0,
      longitude: 0
    });
  }
  addLatLng(lat, lng, uid) {
    let docId: any;
    let values: any;
    this.getUserDoc(uid).subscribe(result => {
      docId = result.pop().payload.doc;
      values = docId.data();
      this.db.collection(`users`).doc(docId.id).set({
        fname: values.fname,
        lname: values.lname,
        gender: values.gender,
        employmentStatus: values.employmentStatus,
        incomeRange: values.incomeRange,
        availabilityDays: values.availabilityDays,
        availabilityHours: values.availabilityHours,
        dryerAgeRange: values.dryerAgeRange,
        vehicleAccess: values.vehicleAccess,
        carry20Pounds: values.carry20Pounds,
        newsletter: values.newsletter,
        userType: 'washer', /** we want this to show what type of user they are */
        userId: values.userId,
        latitude: lat,
        longitude: lng
      });
    });
  }
  addUserImageURL(image, uid) {
    let docId: any;
    this.getUserDoc(uid).subscribe(result => {
      docId = result.pop().payload.doc;
      this.db.collection(`users`).doc(docId.id).set({
        imageURL: image
      }, {merge: true});
    });
  }
  getUserDoc(uid) {
    return this.db.collection('users', ref => ref.where('userId', '==', uid)).snapshotChanges();
  }
    updateUser() {}
    deleteUser() {}
    getWashers() {
      return this.db.collection('users', ref => ref.where('userType', '==', 'washer')).snapshotChanges();
    }
  getUsers() {
    return this.db.collection('users', ref => ref.where('userType', '==', 'user')).snapshotChanges();
  }
}
