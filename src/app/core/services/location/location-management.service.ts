import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class LocationManagementService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService) { }

  getLocations(country: string): Observable<any> {
      return this.httpService.get(`${this.appConfig.config.url.getLocationByCode}${country}`)
        .pipe(map(response => response.data));
    }
}
