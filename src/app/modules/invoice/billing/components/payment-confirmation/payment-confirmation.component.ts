import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss']
})
export class PaymentConfirmationComponent implements OnInit {

  page: any;
  packageList: any[] = [];
  billingsForm: FormGroup;
  loadPage: boolean = true
  check: boolean = false

  //dropdown variables
  invoice: any[];
  package: any[];
  invoicedata: string;
  isDownloaded: boolean = false;
  DATA: any;
  
  @Input() invoiceInformation: string;

  constructor(
    private invoiceManagementService: InvoiceManagementService,
    private router: Router
    ) {  
      
     }

  ngOnInit(): void {
    this.setData(this.invoiceInformation);

  }

  async getData(){
    this.invoice = await this.invoiceManagementService.getSingleInvoice(this.invoicedata).
      toPromise().then(response => {  
        return  response
      });
      this.isDownloaded = true
    }

async setData(invoiceCode: string){
  this.invoicedata = invoiceCode;
  await delay(7000);
  this.check = true;
  this.loadPage = false
  await delay(4500);
  this.router.navigate([`invoice-management`])  
}
  
}

function delay(ms: number): Promise<unknown> {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

