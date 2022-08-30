import { Component, OnInit, ViewChild } from '@angular/core';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { billing } from 'src/app/shared/models/request/billing-request';
import { BillingInformationComponent } from '../components/billing-information/billing-information.component';
import { PaymentConfirmationComponent } from '../components/payment-confirmation/payment-confirmation.component';
import { QuotePackageComponent } from '../components/quote-package/quote-package.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  currentStep: number = 1;
  packageList: any;
  packageRequest: any;
  totalPayment: number;
  billingInformation: billing;
  displayDescription: boolean = false;
  description: string="";
  isValid: boolean = true;
  modalIsValid: boolean = false;
    //ViewChild Data
  @ViewChild(BillingInformationComponent) billingInformationComponent:BillingInformationComponent;
  @ViewChild(QuotePackageComponent) child: QuotePackageComponent;

  constructor(
    private tableManagmentService: TableManagmentService,) {
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      });
      }

  ngOnInit(): void {
  }

  nextStep(lastStep: boolean = false){
    if(!lastStep){
      switch(this.currentStep){
        case 1:
          this.totalPayment = 0;
          this.packageList.forEach(packages => {
            this.totalPayment = Number(packages.price) + this.totalPayment
            
          });
          this.isValid = true;
          this.currentStep = 2;
          break;
        case 2:
          this.modalIsValid = true;
          this.displayDescription = true;
          break;
      }
    }else{ 
      this.billingInformationComponent.setInvoiceInformation(this.description);
    }
    
  }

  selectedButton(data: any){
    switch(data.buttonId) { 
      case 2:{
        this.child.deleteItem(data.rowData)
        if(this.child.packageSize() == 0)
          this.isValid = true
        else this.isValid = false
        break;
      }
    }
  }

  

}
