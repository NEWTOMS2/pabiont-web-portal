import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private router:Router,
    private appConfig: AppConfigService,
    private httpService: HttpService) { }

  saveData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
    
  getData(key:string):any{
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  logOut(){
    localStorage.clear();
    this.router.navigate([`/login`])
  }

  validateCre(credential: string): Observable<any>{
            return this.httpService.get(`${this.appConfig.config.url.checkCredential}${credential}`)
      .pipe(map(response => response.data));
  }
}
