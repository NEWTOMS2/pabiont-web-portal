import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { WarehouseManagementService } from 'src/app/core/services/warehouse/warehouse-management.service';
import { billing } from 'src/app/shared/models/request/billing-request';
import { packages } from 'src/app/shared/models/request/package-request';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {

  page: any;
  billingsForm: FormGroup;
  today: Date = new Date();
  billingInformation: any;

  //dropdown variables
  clientList: any[];
  userList: any[];
  packageRequest: any[] = [];
  warehouseList: any[];
  selectedShipper: any;
  selectedConsignee: any;
  selectedBillTo: any;
  selectedAgent: any;
  selectedBranch: any;
  selectedOrigin: any;
  selectedDestination: any;
  selectedLocation: any;

  @Input() packageList: any[];
  @Input() totalPayment: number;
  @Output() finalizeStep = new EventEmitter<billing>();
  @Output() isValid = new EventEmitter<boolean>();

  constructor(
    private appConfig: AppConfigService,
    private usersManagementService: UsersManagementService,
    private invoiceManagementService: InvoiceManagementService,
    private warehouseManagementService: WarehouseManagementService,
    public datepipe: DatePipe,
    private formBuilder: FormBuilder,
    private messageService: MessageService
    ) {   
    this.page = this.appConfig.invoiceCreation;
    this.page = this.page.default;
    this.resetForm();
    this.getClientList();
    this.getUserList();
    this.getLastInvoice();
    this.getWarehouseList();
    }

  ngOnInit(): void {
  }

  resetForm() {
    this.billingsForm = this.formBuilder.group({
      date: [this.today,[Validators.required]],
      invoice: ["",],
      shipper: ["",[Validators.required]],
      consignee: ["",[Validators.required]],
      agent: ["",[Validators.required]],
      bill_to: ["",[Validators.required]],
      tracking: ["",],
      branch: ["",[Validators.required]],
      origin_destination: ["",[Validators.required]],
      final_destination: ["",[Validators.required]],
      location: ["",[Validators.required]],
    });
   this.billingsForm.controls['invoice'].disable();
   this.billingsForm.statusChanges.subscribe(status => {
    let valid = status == "VALID" ? true : false
    this.isValid.emit(!valid)
    });
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

  async getLastInvoice(){
    let lastInvoice = await this.invoiceManagementService.getLastInvoice().
            toPromise().then(response => { 
              return response.last_invoice
            });
    let prefix = await this.invoiceManagementService.getPrefix().
        toPromise().then(response => { 
          return response.prefix
        });    
    lastInvoice++;
    this.billingsForm.controls.invoice.setValue(`${prefix}-${lastInvoice}-${this.datepipe.transform(this.today, 'yy')}`);
  }

  async getWarehouseList(){
    this.warehouseList = await this.warehouseManagementService.getWarehouses().
            toPromise().then(response => { 
              return response
            });
    this.warehouseList = this.warehouseList.filter(obj => obj.type == "Localidad");
  }

 async setInvoiceInformation(description: string){

    this.packageList.forEach(packages => {
      this.packageRequest.push(packages.package_information)
    });
    this.billingInformation = new billing(description, this.billingsForm.controls['invoice'].value, this.datepipe.transform(this.today, 'yyyy-MM-dd'), this.datepipe.transform(this.today, 'yyyy-MM-dd'), this.totalPayment
                              , this.totalPayment, this.selectedShipper.code, this.selectedConsignee.code, this.selectedAgent.code, this.selectedBillTo.code, 1, 11,this.packageRequest,"Cash",this.billingsForm.controls['origin_destination'].value.id,
                                this.billingsForm.controls['final_destination'].value.id, this.billingsForm.controls['final_destination'].value.description);
  await this.invoiceManagementService.createInvoice(this.billingInformation).subscribe(
      response => {
        this.messageService.addAll([{severity: 'success', summary: 'Factura y Paquetes creados correctamente.', detail: '', sticky: true},
                                    {severity: 'success', summary: 'Correo con la factura enviado al remitente correctamente.', detail: '', sticky: true}]);
        
        //cambios de post
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al generar la Factura y los Paquetes.', detail: ''})
        console.log(err)
      }
    );
  }
}
