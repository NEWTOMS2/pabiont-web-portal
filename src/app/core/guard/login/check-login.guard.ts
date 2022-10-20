import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import sizeof from 'object-sizeof'
import { UsersService } from '../../services/security/users.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  
  IsLogged: string[];

  constructor(private usersService: UsersService,
              private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot){
   this.IsLogged = Object.keys(this.usersService.getData('user'));
   if(this.IsLogged.length > 0){
    return true
   }else{
    this.router.navigate([`login`]);
    return false
   }
   
  }
  
}
