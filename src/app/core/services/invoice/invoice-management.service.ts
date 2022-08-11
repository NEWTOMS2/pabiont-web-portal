import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from '../../http/http.service';
import { AppConfigService } from '../app-config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceManagementService {

  constructor(
    private httpService: HttpService,
    private appConfig: AppConfigService
    ) { }

  changeInvoice(invoice: any): Observable<any> {
    //  updating an existing Invoice Status
      return this.httpService.patch(`${this.appConfig.config.url.changeInvoice}`, invoice)
            .pipe(map(response => response.data));
    
  }

  getInvoices(): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getInvoice}`)
      .pipe(map(response => response.data));
  }

  getPackages(invoice: string): Observable<any> {
    return this.httpService.get(`${this.appConfig.config.url.getPackageByInvoice}${invoice}`)
      .pipe(map(response => response.data));
  }

  changePackage(packageValue: any): Observable<any> {
    //  updating an existing Invoice Status
      return this.httpService.patch(`${this.appConfig.config.url.changeStatusPackage}`, packageValue)
            .pipe(map(response => response.data));
    
  }

}
