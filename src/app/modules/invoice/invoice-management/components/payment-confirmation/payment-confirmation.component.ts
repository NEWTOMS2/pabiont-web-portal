import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  invoice: any[];
  package: any[];
  invoicedata: string;
  isDownloaded: boolean = false;
  DATA: any;
  
  @Input() invoiceInformation: string;

  constructor(
    private invoiceManagementService: InvoiceManagementService
    ) {  
    this.invoiceInformation
    console.log(this.invoiceInformation)
     }

  ngOnInit(): void {
    console.log(this.invoiceInformation)
  }

  async getData(){
    this.invoice = await this.invoiceManagementService.getSingleInvoice(this.invoicedata).
      toPromise().then(response => {  
        return  response
      });
      this.isDownloaded = true
      console.log(this.invoice)
    }

setData(invoiceCode: string){
  this.invoicedata = invoiceCode
  this.getData()
  console.log(this.invoicedata)
}

  downloadPDF() {
    // Extraemos el
    this.DATA = document.getElementById('page1-div');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(this.DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${this.invoicedata}-${new Date().toDateString()}.pdf`);
    });
  }


}
