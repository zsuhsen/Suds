import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserServiceService} from '../services/user-service.service';
import {Upload} from '../upload';
import * as _ from 'lodash';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  user: firebase.User;
  selectedFiles: FileList;
  currentUpload: Upload;
  @Input() isDLPhoto = false;
  constructor(public authService: AuthService,
              public us: UserServiceService,
              public upSvc: UploadService) { }
  ngOnInit() {
    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;
      });
  }
  detectFiles(event) {
    this.currentUpload = null;
    this.selectedFiles = null;
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    if (this.isDLPhoto) {
      this.upSvc.pushDLUpload(this.currentUpload, this.user.uid);
    } else {
      this.upSvc.pushUpload(this.currentUpload, this.user.uid);
    }
  }


}
