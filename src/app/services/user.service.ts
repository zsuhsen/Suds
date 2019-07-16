import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';

export class Info {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  info: AngularFirestoreCollection<Info[]> = null;
  userId: string;

  constructor(public db: AngularFirestore,
              public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) { this.userId = user.uid; }
    });
  }
  getInfoList(): AngularFirestoreCollection<Info[]> {
    if (!this.userId) { return; }
    this.info = this.db.collection(`info/${this.userId}`);
    return this.info;
  }
  createInfo(value) {
    this.db.collection(`info`).add(this.userId);
    return this.db.collection(`info/${this.userId}`).add(value.name);
  }
  updateCurrentUser(value) {
    return new Promise<any>((resolve, reject) => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name
      }).then(res => {
        resolve(res);
      }, err => reject(err));
    });
  }
}
