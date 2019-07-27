import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {Upload} from '../upload';
import {AngularFirestore } from '@angular/fire/firestore';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import {AngularFireDatabase} from '@angular/fire/database';
import {calculateBytes} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/bundle-calculator';
import {AngularFireStorage} from '@angular/fire/storage';
import {UserServiceService} from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private af: AngularFirestore, private db: AngularFireDatabase, private us: UserServiceService) {}

  private basePath = '/uploads';
  private uploadTask: firebase.storage.UploadTask;
  pushUpload(upload: Upload, uid) {
    const storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
      upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
      console.log(error);
      },
      () => {
      upload.url = this.uploadTask.snapshot.downloadURL;
      upload.name = upload.file.name;
      this.saveFileData(upload, uid);
      });
  }
  // Writes the file details to the realtime db
  private saveFileData(upload: Upload, uid) {
    this.db.list(`${this.basePath}/`).push(upload.url);
    this.uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
      this.us.addUserImageURL(downloadUrl, uid);
    });
  }
  pushDLUpload(upload: Upload, uid) {
    const storageRef = firebase.storage().ref();
    this.uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = this.uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveDLFileData(upload, uid);
      });
  }
  // Writes the file details to the realtime db
  private saveDLFileData(upload: Upload, uid) {
    this.db.list(`${this.basePath}/`).push(upload.url);
    this.uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
      this.us.addDLImageURL(downloadUrl, uid);
    });
  }
  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name);
      })
      .catch(error => console.log(error));
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
