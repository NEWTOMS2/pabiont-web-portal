import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { InvoiceInformation } from 'src/app/shared/models/request/invoiceInformation-request.model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
 //Page Variables
 formGroup: FormGroup;
 //Dropdown data
 statusList: any[] = [
   { label: "Pagada", value: 11 },
   { label: "Cancelada", value: 12 }
 ];
 invoiceRow: InvoiceInformation;

 //INPUT AND OUPUTS
 @Output() updateList = new EventEmitter();
 @Output() buttonEnabled = new EventEmitter<boolean>();

 constructor(
   private formBuilder: FormBuilder,
   private invoiceManagementService: InvoiceManagementService
 ) { 
   this.resetForm();
 }

 ngOnInit(): void {
 }

 resetForm(){
   this.formGroup = this.formBuilder.group({
    invoice_number: ["", Validators.required],
    date: ["", Validators.required],
    status: ["", Validators.required],
    name: ["", Validators.required],
   });

   this.formGroup.statusChanges.subscribe(status => {
     this.buttonEnabled.emit(status == "VALID" ? true : false);
   });
 }

 submit() {

  this.invoiceRow = new InvoiceInformation(
      this.formGroup.controls['invoice_number'].value,
      this.formGroup.controls['status'].value.value,
      )
   
   this.invoiceManagementService.changeInvoice(this.invoiceRow).subscribe(
     response => {
       //cambios de post
       this.updateList.emit();
     },
     err => {
       console.log(err)
     }
   );
   
 }

 updateForm(rowData: any){
   console.log(rowData)
   this.formGroup.controls.status.setValue(this.statusList.find(status => rowData.status == status.label));
   this.formGroup.controls.invoice_number.setValue(rowData.invoice_number);
   this.formGroup.controls.date.setValue(rowData.date);
   this.formGroup.controls.name.setValue(rowData.name);
   this.formGroup.controls['invoice_number'].disable();
   this.formGroup.controls['date'].disable();
   this.formGroup.controls['name'].disable();
 }

}
