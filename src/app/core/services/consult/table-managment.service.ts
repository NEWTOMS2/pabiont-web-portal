import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableManagmentService {

  buttonEvent: Subject<any> = new EventEmitter();

  constructor() { }

  selectedButton(buttonId: number, rowData?: any) {
    this.buttonEvent.next({buttonId, rowData});
  }

}
