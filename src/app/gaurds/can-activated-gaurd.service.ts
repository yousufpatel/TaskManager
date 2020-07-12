import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (localStorage.getItem('AUTHERIZATION_TOEKN') != null && localStorage.getItem('ROLE_ID') == '1') {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserGaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
    if (localStorage.getItem('AUTHERIZATION_TOEKN') != null && localStorage.getItem('ROLE_ID') == '2') {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}





