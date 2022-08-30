import { EventEmitter, Injectable, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  @Output() showEvent: EventEmitter<object> = new EventEmitter();

  constructor() { }

  showToast({severity, summary, detail}) {
    this.showEvent.emit({severity: severity, summary: summary, detail: detail})
  }
}
