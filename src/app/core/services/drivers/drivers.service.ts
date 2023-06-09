import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService
    ) { }

  saveDriver(driver: any): Observable<any> {
      return this.httpService.post(`${this.appConfig.config.url.postDriver}`, driver)
            .pipe(map(response => response.data));
  }

  getAllVehicule(): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getAllVehicule}`)
      .pipe(map(response => response.data));
  }

  getAllVehiculeModel(vehicule: string): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getAllVehiculeModel}${vehicule}`)
      .pipe(map(response => response.data));
  }

  getAllDrivers(): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getAllDrivers}`)
      .pipe(map(response => response.data));
  }
}
