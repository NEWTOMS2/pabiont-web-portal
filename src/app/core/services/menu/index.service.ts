import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { RateResponse } from '../../../shared/models/response/rate-response';
import { TrackingResponse } from '../../../shared/models/response/tracking-response';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService
  ) { 

  }

  getRate(id:Number): Observable<RateResponse> {
    return this.httpService.get(`${this.appConfig.config.url.rate}${id}`)
      .pipe(
        map(rateList => {
          if (!rateList) {
            return console.log("error: Data no disponible");
          } else {
            return rateList;
          }
         }),
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }

  getTrackingByCode(code:any): Observable<TrackingResponse> {
    return this.httpService.get(`${this.appConfig.config.url.trackingByCode}${code}`)
      .pipe(
        map(response => {
          if (!response) {
            return console.log("error: Data no disponible");
          } else {
            return response;
          }
         }),
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }

  getTrackingByEmail(email:string): Observable<TrackingResponse> {
    return this.httpService.get(`${this.appConfig.config.url.trackingByEmail}${email}`)
      .pipe(
        map(trackingList => {
          if (!trackingList) {
            return console.log("error: Data no disponible");
          } else {
            return trackingList;
          }
         }),
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }

}
