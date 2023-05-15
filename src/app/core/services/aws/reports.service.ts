import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private httpService: HttpService
  ) {
   }

   getQuicksightURL(): Observable<any> {
    let headers: { [key: string]: any } = {};
    headers['dashboard_id'] = environment.dashboardId;
    return this.httpService.getN(`https://bto1tgj3qi.execute-api.us-east-1.amazonaws.com/prod/statistics`,undefined ,headers)
      .pipe(
        map(response => {
          if (!response) {
            return console.log("error: Data no disponible");
          } else {
            return response.data;
          }
         }),
        catchError((err, caught) => {
          return EMPTY;
        }
      ));
  }


  
}
