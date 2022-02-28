import { AuthService } from './../../services/auth.service';
import { Auth } from './../../Models/Auth';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
interface tokenobj{
  token:string;

}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  auth: Auth ={
    username: '',
    password: '',
   
  }
  

  @ViewChild('clientform') form:any;
  constructor( private authservice: AuthService,
    private cookieservice: CookieService,
    private router: Router
    ) { }

  ngOnInit(): void {
   
  }

  onSubmit({value,valid}:{value:Auth,valid:boolean}){
    this.authservice.getlogin(value) 
      .subscribe((result:tokenobj )=> {
        this.cookieservice.set('mr-Token',result.token);
        this.router.navigate(['/']);
        console.log(result)},
        error=> alert('Invalid Username or Password')
        
      )


  }
 

}
