import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-payment',
  templateUrl: './report-payment.component.html',
  styleUrls: ['./report-payment.component.scss']
})
export class ReportPaymentComponent implements OnInit {

  formGroup: FormGroup;//Dropdown data
  today: Date = new Date();

  constructor(private formBuilder: FormBuilder) { 
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
    /*
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
    */
   
  }
}
