import { Auth } from './../Models/Auth';
import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';


import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
    constructor(
        private authservice: AuthService,
        private cookieservice: CookieService,
        private router: Router,
    ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

}
