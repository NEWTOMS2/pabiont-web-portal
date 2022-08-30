import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService
    ) { }

  saveUser(user: any, isUpdate: boolean): Observable<any> {
    //  updating an existing warehouse
    if (isUpdate) {
      return this.httpService.patch(`${this.appConfig.config.url.saveUser}`, user)
            .pipe(map(response => response.data));
        // create a new warehouse
    } else {
      return this.httpService.post(`${this.appConfig.config.url.saveUser}`, user)
            .pipe(map(response => response.data));
    }
  }

  getUserClient(): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getUserClient}`)
      .pipe(map(response => response.data));
  }

  getUserAdmin(): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getUserAdmin}`)
      .pipe(map(response => response.data));
  }

}
