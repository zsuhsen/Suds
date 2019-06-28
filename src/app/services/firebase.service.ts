import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }
  createSubscriber(value) {
    return this.db.collection('newsLetter').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      email: value.email
    });
  }
}
