import { Injectable } from '@angular/core';
import * as JSON_MAIN_VIEW from '@json/pages/menu.json';
import * as JSON_CONFIG from '@json/config.json';
import * as JSON_INDEX from '@json/pages/index.json';
import * as JSON_WAREHOUSE_MANAGEMENT from '@json/pages/warehouse/warehouse-management.json';
import * as JSON_USERS_MANAGEMENT from '@json/pages/users/user-management.json';
import * as JSON_INVOICE_MANAGEMENT from '@json/pages/invoice/invoice-management.json';
import * as JSON_INVOICE_CREATION from '@json/pages/invoice/invoice-creation.json';
import * as JSON_RATE_MANAGEMENT from '@json/pages/general/rate/rate-management.json';
import * as JSON_DRIVER_MANAGEMENT from '@json/pages/users/driver-management.json'

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  //AMBIENTE
  public config = JSON_CONFIG;

  //MENU
  public mainView = JSON_MAIN_VIEW;
  public index = JSON_INDEX;

  //WAREHOUSE
  public warehouseManagement = JSON_WAREHOUSE_MANAGEMENT;

  //USERS
  public userManagement = JSON_USERS_MANAGEMENT;

  //INVOICE
  public invoiceManagement = JSON_INVOICE_MANAGEMENT;
  public invoiceCreation = JSON_INVOICE_CREATION;

  //RATE
  public rateManagement = JSON_RATE_MANAGEMENT;

  //DRIVER
  public driverManagement = JSON_DRIVER_MANAGEMENT;
}
