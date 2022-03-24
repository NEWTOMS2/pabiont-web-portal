import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { RateResponse } from '../../http/models/response/rate-response';
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

}
