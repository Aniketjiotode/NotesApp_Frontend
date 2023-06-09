import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../Services/authguard/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authservice:AuthguardService,private router:Router){}
  canActivate(
  ):boolean{
    if(!this.authservice.gettoken()){
      this.router.navigateByUrl('/logindemo')
    }
    return this.authservice.gettoken();
  }
  
}
