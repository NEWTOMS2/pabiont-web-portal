import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WarehouseManagementService } from 'src/app/core/services/warehouse/warehouse-management.service';
import { WarehouseInformation } from 'src/app/shared/models/request/warehouseInformation-request.model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  //Page Variables
  formGroup: FormGroup;//Dropdown data
  typeList: any[] = [
    { label: "Almacen", value: "Almacen" },
    { label: "Localidad", value: "Localidad" }
  ];
  warehouseRow: WarehouseInformation;
  isUpdate = false; 

  //INPUT AND OUPUTS
  @Output() updateList = new EventEmitter();
  @Output() buttonEnabled = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private warehouseManagementService: WarehouseManagementService
  ) { 
    this.resetForm();
  }

  ngOnInit(): void {
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      code: ["", [Validators.required, Validators.maxLength(3)]],
      type: ["", Validators.required],
      description: ["", Validators.required]
    });

    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
  }

  submit() {
    if(this.isUpdate){
      this.warehouseRow = new WarehouseInformation(
        this.formGroup.controls['code'].value, 
        this.formGroup.controls['type'].value.value, 
        this.formGroup.controls['description'].value
        )
    }else{
      this.warehouseRow = new WarehouseInformation(
        this.formGroup.controls['code'].value, 
        this.formGroup.controls['type'].value.value, 
        this.formGroup.controls['description'].value,
        1
        )
    }
    
    console.log(this.warehouseRow)
    this.warehouseManagementService.saveWarehouse(this.warehouseRow, this.isUpdate).subscribe(
      response => {
        //cambios de post
        console.log("exitoso")
        this.updateList.emit();
      },
      err => {
        console.log(err)
      }
    );
    
  }

  updateForm(rowData: any){
    console.log(rowData)
    this.formGroup.controls.code.setValue(rowData.code);
    this.formGroup.controls.type.setValue(this.typeList.find(type => rowData.type == type.value));
    this.formGroup.controls.description.setValue(rowData.description);
    this.formGroup.controls['code'].disable();
    this.isUpdate=true;
  }

}
