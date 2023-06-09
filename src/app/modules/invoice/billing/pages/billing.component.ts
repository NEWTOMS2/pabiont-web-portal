import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { billing } from 'src/app/shared/models/request/billing-request';
import { BillingInformationComponent } from '../components/billing-information/billing-information.component';
import { PaymentConfirmationComponent } from '../components/payment-confirmation/payment-confirmation.component';
import { QuotePackageComponent } from '../components/quote-package/quote-package.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  
  formGroup: FormGroup;
  currentStep: number = 1;
  packageList: any;
  packageRequest: any;
  totalPayment: number;
  billingInformation: billing;
  invoiceInformation: string;
  displayDescription: boolean = false;
  description: string="";
  isValid: boolean = true;
  modalIsValid2: boolean = false;
  modalIsValid: boolean = false;
    //ViewChild Data
  @ViewChild(BillingInformationComponent) billingInformationComponent:BillingInformationComponent;
  @ViewChild(QuotePackageComponent) child: QuotePackageComponent;
  @ViewChild(PaymentConfirmationComponent) childq: PaymentConfirmationComponent;

  constructor(private formBuilder: FormBuilder,
    private tableManagmentService: TableManagmentService,
    private confirmationService: ConfirmationService,
    private router: Router) {
      this.resetForm();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      });
      
      }

  ngOnInit(): void {
  }

  resetForm(){
    this.modalIsValid2 = false;
    this.formGroup = this.formBuilder.group({
      description: ["", [Validators.required,Validators.pattern(/.*\S+.*/)]],
    });
    this.formGroup.statusChanges.subscribe(status => {
      this.modalIsValid2 = status == "VALID" ? true : false;
    });
    
  }
validModal(){
return !this.modalIsValid2
}
 async nextStep(lastStep: boolean = false){
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
      this.invoiceInformation = await this.billingInformationComponent.setInvoice()
      await this.billingInformationComponent.setInvoiceInformation(this.description);   
      lastStep = false;
      this.isValid = true;
      this.description = "";
      this.currentStep = 3;
    }
    
  }
  redirect(){
    this.router.navigate([`main`])
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
  confirm() {
    this.confirmationService.confirm({
      message: 'Estos son los datos que desea registrar?',
      accept: () => {
        this.nextStep();
          //Actual logic to perform a confirmation
      }
  });
}


  

}
