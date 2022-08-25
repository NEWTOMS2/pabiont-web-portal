import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {

  page: any;
  packageList: any[] = [];

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService) {   
    this.page = this.appConfig.invoiceCreation;
    this.page = this.page.default;
     }

  ngOnInit(): void {
  }

}
