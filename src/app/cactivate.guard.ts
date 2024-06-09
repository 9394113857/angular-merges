import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CactivateGuard implements CanActivate {

  constructor(public rtr : Router) {}  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
      if(localStorage.getItem("uname") == null && localStorage.getItem("pwd") == null){
        alert("Please eneter credentials to login..")
        this.rtr.navigate(["login"])
        return false;
      }
      else{
        return true;
      }
    }
}
