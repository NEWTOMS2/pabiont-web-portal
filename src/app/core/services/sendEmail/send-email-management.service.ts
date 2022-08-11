import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class SendEmailManagementService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService) { }

  sendEmail(email: any): Observable<any> {
  console.log(email)
      return this.httpService.post(`${this.appConfig.config.url.sendEmail}`, email)
            .pipe(map(response => response.data));
    }
  }

