import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from 'src/app/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(public db: AngularFirestore) {

    getUsers() {
      return this.db.collection('users').snapshotChanges();
    }

    createUser(user: User) {
      return this.db.collection('users').add(user);
    }

    updateUser(user: User) {
      delete user.id;
      this.db.doc('users/' +user.id).update(user);
    }

    deleteUser(userId: String) {
      this.db.doc('users/' +userID).delete();
    }
  }
}
