import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logged-in-nav',
  templateUrl: './logged-in-nav.component.html',
  styleUrls: ['./logged-in-nav.component.css']
})
export class LoggedInNavComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }



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


  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.router.navigate(['/']);
      }, (error) => {
        console.log('Logout error', error);
      });
  }

}
