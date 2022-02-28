import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Auth } from './../../Models/Auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean ;
  loggedInUser: string;
  constructor(
    private authservice: AuthService,
    private cookieservice: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const mrtoken= this.cookieservice.get('mr-Token')
    if (mrtoken) {
      this.isLoggedIn= true;
      this.loggedInUser = mrtoken
      

    }else{
        this.isLoggedIn = false;
    }
  }
  onLogoutClick(){
  this.cookieservice.deleteAll('mr-Token');
  this.router.navigate(['/auth'])
  
  }
}
