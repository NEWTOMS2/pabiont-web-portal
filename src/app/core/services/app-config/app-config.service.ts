import { Injectable } from '@angular/core';
import * as JSON_MAIN_VIEW from '@json/pages/menu.json';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  public mainView = JSON_MAIN_VIEW;
}
