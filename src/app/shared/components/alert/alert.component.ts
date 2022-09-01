import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  
  constructor( private alertService: AlertService, private messageService: MessageService) {
    this.alertService.showEvent.subscribe(message => {
      this.messageService.add(message);
    })
  }

  ngOnInit(): void {
  }

}
