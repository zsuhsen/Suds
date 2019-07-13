import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  onResize(e) {

    let toggleElement = <HTMLInputElement> document.getElementById("toggle");

    if (e.target.innerWidth < 825 && toggleElement.checked)
      document.getElementById('container').style.height = '400px';
    else
      document.getElementById('container').style.height = '100%';

  }

  heightUpdate(e) {

    if (e.target.checked)
      document.getElementById('container').style.height = '400px';
    else
      document.getElementById('container').style.height = '100%';


  }

  title = 'Suds'
  constructor() { }

  ngOnInit() {
  }

}
