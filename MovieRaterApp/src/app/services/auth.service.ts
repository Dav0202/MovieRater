import { CookieService } from 'ngx-cookie-service';
import { Auth } from './../Models/Auth';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'
import { of } from 'rxjs'

//const httpoptions = {
  //headers : new HttpHeaders({
  //  'Content-Type' : 'application/json',
 // })
//}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  baseurl : string= 'http://127.0.0.1:8000/';

  constructor(
    private http : HttpClient,
    private cookieservice: CookieService
  ) { }



  getlogin(auth:Auth){
    const body = JSON.stringify(auth)
    return this.http.post(`${this.baseurl}auth/`, body, {headers:this.getauth()});

  }
  getauth(){
    const token = this.cookieservice.get('mr-Token')
    return new HttpHeaders({
      'Content-Type' : 'application/json',
       Authorization : `Token ${token}`
    })
   }



}
