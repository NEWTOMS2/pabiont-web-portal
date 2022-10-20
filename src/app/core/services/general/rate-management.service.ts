import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { RateResponse } from 'src/app/shared/models/response/rate-response';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class RateManagementService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService
  ) { 

  }

  getRate(id:Number): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.rate}${id}`)
      .pipe(map(response => response.data));
  }
  changeRate(rateData: any): Observable<any> {
    //  updating an existing Invoice Status
      return this.httpService.patch(`${this.appConfig.config.url.changeRate}`, rateData)
            .pipe(map(response => response.data));
    
  }

}
