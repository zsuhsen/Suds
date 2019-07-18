import { Component, OnInit } from '@angular/core';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  constructor(private ups: UploadService) { }
  ngOnInit() {
  }

}
