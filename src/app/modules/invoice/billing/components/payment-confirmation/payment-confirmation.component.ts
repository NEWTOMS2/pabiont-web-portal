import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { WarehouseManagementService } from 'src/app/core/services/warehouse/warehouse-management.service';
import { billing } from 'src/app/shared/models/request/billing-request';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {

  page: any;
  packageList: any[] = [];
  billingsForm: FormGroup;

  //dropdown variables
  clientList: any[];
  userList: any[];
  warehouseList: any[];
  selectedShipper: any;
  selectedConsignee: any;
  selectedBillTo: any;
  selectedAgent: any;
  selectedBranch: any;
  selectedOrigin: any;
  selectedDestination: any;
  selectedLocation: any;
  
  @Input() paymentInformation: billing;

  constructor(
    private appConfig: AppConfigService,
    private formBuilder: FormBuilder,
    private usersManagementService: UsersManagementService,
    private warehouseManagementService: WarehouseManagementService,
    private datepipe: DatePipe
    ) {   
      
   console.log("test:", this.paymentInformation)
    this.page = this.appConfig.invoiceCreation;
    this.page = this.page.default;
    this.resetForm();
    this.getClientList();
    this.getUserList();
    this.getWarehouseList();
     }

  ngOnInit(): void {
  }

  resetForm() {
    this.billingsForm = this.formBuilder.group({
      date: ["",[Validators.required]],
      invoice: ["",[Validators.required]],
      shipper: ["",[Validators.required]],
      consignee: ["",[Validators.required]],
      agent: ["",[Validators.required]],
      bill_to: ["",[Validators.required]],
      tracking: ["",[Validators.required]],
      branch: ["",[Validators.required]],
      origin_destination: ["",[Validators.required]],
      final_destination: ["",[Validators.required]],
      location: ["",[Validators.required]],
    });
   this.billingsForm.controls['invoice'].disable();
  }

  async getClientList(){
    this.clientList = await this.usersManagementService.getUserClient().
            toPromise().then(response => { 
              return response
            });
            
  }

  async getUserList(){
    this.userList = await this.usersManagementService.getUserAdmin().
            toPromise().then(response => { 
              return response
            });
  }

  async getWarehouseList(){
    this.warehouseList = await this.warehouseManagementService.getWarehouses().
            toPromise().then(response => { 
              return response
            });
    this.warehouseList = this.warehouseList.filter(obj => obj.type == "Localidad");
  }


}
