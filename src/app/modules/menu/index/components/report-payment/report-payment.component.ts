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
  today: Date = new Date();
  buttonEnabled: boolean = false;
  reportBody: reportPayment
  description: string
  finalDate: any
  

  constructor(private formBuilder: FormBuilder,
    private appConfig: AppConfigService,
    private indexService: IndexService,
    private messageService: MessageService,
    public datepipe: DatePipe) { 
    this.resetForm()
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      code: ["", [Validators.required,Validators.pattern(/^[0-9]/u)]],
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
  send(){
    this.finalDate = this.datepipe.transform(this.formGroup.controls['date'].value,'yyyy-MM-dd')
    console.log(this.datepipe.transform(this.formGroup.controls['date'].value,'yyyy-MM-dd'))
    this.description = this.formGroup.controls['accountHolder'].value + '-' + this.formGroup.controls['paymentReference'].value;
    this.reportBody = new reportPayment(parseInt(this.formGroup.controls['code'].value),this.formGroup.controls['accountHolder'].value,parseFloat(this.formGroup.controls['amount'].value),this.formGroup.controls['invoiceNumber'].value,this.description,this.finalDate)
    console.log(this.reportBody)
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
          console.log(response)
    },
      err => {
        this.messageService.add({key: 'tc', severity:'warn', summary: 'No hay Informacion', detail: 'No existen paquetes enviados con este correo'});
        console.log(err)
      });
  }
}
