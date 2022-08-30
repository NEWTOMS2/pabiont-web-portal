import { Component, OnInit, ViewChild } from '@angular/core';
import { billing } from 'src/app/shared/models/request/billing-request';
import { BillingInformationComponent } from '../components/billing-information/billing-information.component';
import { PaymentConfirmationComponent } from '../components/payment-confirmation/payment-confirmation.component';

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

  @ViewChild(BillingInformationComponent) billingInformationComponent:BillingInformationComponent;

  constructor() { }

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
          console.log(this.packageRequest);
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

  

}
