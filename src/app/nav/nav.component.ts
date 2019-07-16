import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  user: firebase.User;

  title = 'Suds'
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.authService.getLoggedInUser()
      .subscribe( user => {
        console.log( user );
        this.user = user;

      });

  }

  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.router.navigate(['/']);
      }, (error) => {
        console.log('Logout error', error);
      });
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



}
