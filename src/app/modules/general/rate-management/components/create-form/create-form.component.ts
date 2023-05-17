import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RateManagementService } from 'src/app/core/services/general/rate-management.service';
import { RateInformation } from 'src/app/shared/models/request/rateInformation-request.model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  //Page Variables
  formGroup: FormGroup;//Dropdown data
  rateRow: RateInformation;
  isUpdate = false; 

  //INPUT AND OUPUTS
  @Output() updateList = new EventEmitter();
  @Output() buttonEnabled = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private rateManagementService: RateManagementService,
    private messageService: MessageService,
  ) { 
    this.resetForm();
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      aerial: ["", [Validators.required,Validators.pattern(/^\d*\.?\d*$/)]],
      maritime: ["", [Validators.required,Validators.pattern(/^\d*\.?\d*$/)]],
      company: ["", Validators.required]
    });
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
  }

  submit() {
      this.rateRow = new RateInformation(
      parseFloat(this.formGroup.controls['aerial'].value), 
      parseFloat(this.formGroup.controls['maritime'].value), 
        1
        )
    this.rateManagementService.changeRate(this.rateRow).subscribe(
      response => {
        //cambios de post
        this.messageService.add({severity: 'success', summary: 'Tarifa modificada correctamente.', detail: ''})
        this.updateList.emit();
      },
      err => {
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al modificar las tarifas.', detail: ''})
        console.log(err)
      }
    );
    
  }


  updateForm(rowData: any){
    this.formGroup.controls.aerial.setValue(rowData.aerial);
    this.formGroup.controls.maritime.setValue(rowData.maritime);
    this.formGroup.controls.company.setValue(rowData.company_name);
    this.formGroup.controls['company'].disable();
  }


}
