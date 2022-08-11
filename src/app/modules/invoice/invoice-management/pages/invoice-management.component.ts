import { Component, OnInit, ViewChild } from '@angular/core';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { CreateFormComponent } from '../components/create-form/create-form.component';

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

   //ViewChild Data
   @ViewChild(CreateFormComponent) child: CreateFormComponent;
   
  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private invoiceManagementService: InvoiceManagementService
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
    this.packageList = await this.invoiceManagementService.getPackages(invoiceId).
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
        console.log(data.rowData)
        this.child.updateForm(data.rowData)
        break;
      }
      case 2:{
        this.invoiceCode = data.rowData.invoice_number
        this.getPackagesList(data.rowData.invoice_number)
        break;
      }
    }

  }

  hideDialog() {
    this.visibleDialog = false;
  }


}
