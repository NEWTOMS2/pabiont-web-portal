import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigService } from '../services/app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private appConfig: AppConfigService
    ) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(`${this.appConfig.config.apiBaseURL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch<any>(
          `${this.appConfig.config.apiBaseURL}${path}`,
          JSON.stringify(body),
          this.httpOptions
          ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
      return this.http.post(
        `${this.appConfig.config.apiBaseURL}${path}`,
      JSON.stringify(body),
      this.httpOptions
      ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
      return this.http.delete(
        `${this.appConfig.config.apiBaseURL}${path}`
      ).pipe(catchError(this.formatErrors));
  }

}
