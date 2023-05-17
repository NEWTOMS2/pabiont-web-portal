import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { CreateFormComponent } from '../components/create-form/create-form.component';
import { PackageManagementComponent } from '../components/package-management/package-management.component';
import { PaymentConfirmationComponent } from '../components/payment-confirmation/payment-confirmation.component';

@Component({
  selector: 'app-invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.scss']
})
export class InvoiceManagementComponent implements OnInit {

  //Page Variables
  page: any;
  visibleDialog: boolean = false;
  buttonIsEnabled: boolean = false;
  invoiceCode: string;
  invoiceList: any[] = [];
  currentStep: number = -1;
  modalTitle: string ="";
  packageList: any[];
  invoiceInformation: any;

   //ViewChild Data
   @ViewChild(CreateFormComponent) child: CreateFormComponent;
   @ViewChild(PaymentConfirmationComponent) childq: PaymentConfirmationComponent;
   
  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private invoiceManagementService: InvoiceManagementService,
    private router: Router
  ) {
    this.page = this.appConfig.invoiceManagement;
    this.page = this.page.default;
    this.getInvoiceList();
    this.tableManagmentService.buttonEvent.subscribe(data => {
    this.selectedButton(data);
    }); 
  }

  ngOnInit(): void {
  }
  async getInvoiceList(){
    this.invoiceList = await this.invoiceManagementService.getInvoices().
            toPromise().then(response => { 
              return response
            });
  }

  async getPackagesList(invoiceId: string){
    this.packageList = await this.invoiceManagementService.getHistoricalPackages(invoiceId).
            toPromise().then(response => { 
              return response
            });
  }

  buttonEnabled(isValid: boolean){
    this.buttonIsEnabled = isValid;
  }

  selectedButton(data: any){ 
    this.visibleDialog = true;
    this.currentStep = data.buttonId
    switch(data.buttonId) { 
      case 1:{
        this.child.updateForm(data.rowData)
        break;
      }
      case 2:{
        this.invoiceCode = data.rowData.invoice_number
        this.getPackagesList(data.rowData.invoice_number)
        break;
      }
      case 3:{
        this.invoiceInformation = data.rowData.invoice_number
        this.childq.setData(this.invoiceInformation)
        break;
      }
    }

  }

  hideDialog() {
    this.visibleDialog = false;
  }
  hideDialog2() {
    this.visibleDialog = false;
    window.location.reload()
  }
  redirect(){
    this.router.navigate([`main`]);
  }

}
