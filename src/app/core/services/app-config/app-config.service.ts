import { Injectable } from '@angular/core';
import * as JSON_MAIN_VIEW from '@json/pages/menu.json';
import * as JSON_CONFIG from '@json/config.json';
import * as JSON_INDEX from '@json/pages/index.json';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public mainView = JSON_MAIN_VIEW;

  public config = JSON_CONFIG;

  public index = JSON_INDEX;

}
