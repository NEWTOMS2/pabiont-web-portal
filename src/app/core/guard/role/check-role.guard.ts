import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/security/users.service';

@Injectable({
  providedIn: 'root'
})
export class CheckRoleGuard implements CanActivate {

  getUser: any

  constructor(
    private usersService: UsersService,
    private router: Router
    ){
  }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.getUser =this.usersService.getData('user');
      if(route.data.roles.some(role => role == this.getUser.rol)){
        return true;
      }
      else{
        this.router.navigate([`main`]);
        return false 
      }
  }
  
}
