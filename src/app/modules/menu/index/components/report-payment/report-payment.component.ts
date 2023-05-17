import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { MessageService } from 'primeng/api';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { IndexService } from 'src/app/core/services/menu/index.service';
import { reportPayment } from 'src/app/shared/models/request/reportPayment-request';

@Component({
  selector: 'app-report-payment',
  templateUrl: './report-payment.component.html',
  styleUrls: ['./report-payment.component.scss']
})
export class ReportPaymentComponent implements OnInit {

  formGroup: FormGroup;//Dropdown data
  formInvoice: FormGroup;//Dropdown data
  today: Date = new Date();
  buttonEnabled: boolean = false;
  buttonInvoiceEnabled: boolean = false;
  reportBody: reportPayment
  description: string
  finalDate: any
  

  constructor(private formBuilder: FormBuilder,
    private appConfig: AppConfigService,
    private indexService: IndexService,
    private messageService: MessageService,
    public datepipe: DatePipe) { 
    this.resetForm()
    this.resetInvoiceForm()
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      code: ["", [Validators.required]],
      accountHolder: ["", [Validators.required,Validators.pattern(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)]],
      amount: [0.1, [Validators.required]],
      invoiceNumber: ["",[Validators.required]],
      paymentReference: ["", Validators.required],
      date: [this.today, Validators.required]
    });
    
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled = status == "VALID" ? true : false;
    });
  }

  limitDate(){
    let since = new Date();
    since.setMonth(since.getMonth() - 2);
    return since
  }
  resetInvoiceForm(){
    this.formInvoice = this.formBuilder.group({
      invoice: ["", [Validators.required,Validators.pattern(/^[A-Za-z0-9-]*$/)]]
    });
    
    this.formInvoice.statusChanges.subscribe(status => {
      this.buttonInvoiceEnabled = status == "VALID" ? true : false;
    });
    this.formGroup.controls['code'].disable();
    this.formGroup.controls['accountHolder'].disable();
    this.formGroup.controls['amount'].disable();
    this.formGroup.controls['invoiceNumber'].disable();
    this.formGroup.controls['paymentReference'].disable();
    this.formGroup.controls['date'].disable();
  }
  send(){
    this.finalDate = this.datepipe.transform(this.formGroup.controls['date'].value,'yyyy-MM-dd')
    this.description = this.formGroup.controls['accountHolder'].value + '-' + this.formGroup.controls['paymentReference'].value;
    this.reportBody = new reportPayment(1,this.formGroup.controls['accountHolder'].value,parseFloat(this.formGroup.controls['amount'].value),this.formGroup.controls['invoiceNumber'].value,this.description,this.finalDate)
    this.indexService.createReport(this.reportBody).subscribe(response => {
      if (response == 'Monto Incorrecto, verfique la Factura') {
        this.messageService.add({key: 'tc', severity:'error', summary: 'Monto Incorrecto', detail: 'Revisar monto detallado en la factura'});
      }
      else if (response == 'Factura No Existe') {
        this.messageService.add({key: 'tc', severity:'error', summary: 'Factura No Existe', detail: 'Favor verificar el código de la factura ingresado'});
      }
      else if (response == 'Código de cliente No Existe') {
        this.messageService.add({key: 'tc', severity:'error', summary: 'Cliente No Existe', detail: 'Favor verificar el código del cliente ingresado'});
      
      }
      else {
        this.messageService.add({key: 'tc', severity:'success', summary: 'Reporte creado', detail: 'Pago de la factura registrado correctamente'});
      
      }    
      this.resetInvoiceForm()
      this.resetForm()
    },
      err => {
        this.messageService.add({key: 'tc', severity:'warn', summary: 'No hay Información', detail: 'Error de conexión, intente de nuevo'});
        console.log(err)
      });
  }
  search(){
    this.resetForm()
    this.indexService.getSingleInvoice(this.formInvoice.controls['invoice'].value).subscribe(response=>{
      if (response[0].payment_type == 'Cash' || response[0].payment_date != null) {
        this.messageService.add({key: 'tc', severity:'error', summary: 'Factura Pagada', detail: 'Esta factura ya tiene un pago registrado'});
      }
      else{
        this.messageService.add({key: 'tc', severity:'success', summary: 'Factura Encontrada', detail: 'Complete la información requerida para realizar el reporte del pago'});
        this.formGroup.controls.code.setValue(response[0].shipper);
        this.formGroup.controls.amount.setValue(parseFloat(response[0].total));
        this.formGroup.controls.invoiceNumber.setValue(this.formInvoice.controls['invoice'].value);
        this.formGroup.controls['accountHolder'].enable();
        this.formGroup.controls['paymentReference'].enable();
        this.formGroup.controls['date'].enable();
      }
    }, 
    err => {
      this.messageService.add({key: 'tc', severity:'warn', summary: 'No hay Información', detail: 'Error de conexión, intente de nuevo'});
      console.log(err)
    }
    );
  }
}
