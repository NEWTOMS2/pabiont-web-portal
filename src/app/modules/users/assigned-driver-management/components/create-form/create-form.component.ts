import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DriversService } from 'src/app/core/services/drivers/drivers.service';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { Drivers } from 'src/app/shared/models/request/driver-request.model';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  formGroup: FormGroup;
  typeList: any[] = [
    { label: "Almacén", value: "Almacén" },
    { label: "Localidad", value: "Localidad" }
  ];
  countryList: any[] = [
    { label: "Venezuela", value: 1 },
    { label: "EEUU", value: 2 }
  ];
  isUpdate = false; 
  selectedPosition: any;
  options: any;
  dialogVisible: boolean = false;
  overlays: any[] = [];
  infoWindow: any;
  markerTitle?: string | null;
  draggable: boolean = false;
  modelList: any; 
  brandList: any;
  selectedDriver: any;
  selectedBrand: any;
  selectedModel: any;
  validShow: boolean = true
  driverRow: Drivers
  driverList: any

  //INPUT AND OUPUTS
  @Output() updateList = new EventEmitter();
  @Output() buttonEnabled = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private driverManagementService: DriversService,
    private userManagementService: UsersManagementService) { 
      this.resetForm();
      this.getDriver();
      this.getVehiculeBrandList();
      this.formGroup.controls['license'].disable();
    }

  ngOnInit(): void {
  }
  resetForm(){
    this.formGroup = this.formBuilder.group({
      driver: ["", [Validators.required]],
      license_plate: ["", [Validators.required, Validators.pattern(/^[A-Za-z]{1,3}-[A-Za-z]{1,2}-[0-9]{1,4}/)]],
      brand: ["", Validators.required],
      model: ["", Validators.required],
      license: ["", Validators.required]});
    this.validShow = true;
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
  }

  submit() {

    this.driverRow = new Drivers(
      this.selectedDriver.code,
      (this.formGroup.controls['license_plate'].value).toUpperCase(), 
      this.selectedModel.code
      )
    this.driverManagementService.saveDriver(this.driverRow).subscribe(
      response => {
        //cambios de post
        this.messageService.add({severity: 'success', summary: 'Chofer asignado correctamente.', detail: ''})
        this.updateList.emit();
      },
      err => {
        if((err.error).some(e => e.error_description === 'Vehicule already exist')){
          this.messageService.add({severity: 'error', summary: 'La placa del vehiculo ya esta registrada, intente una diferente.', detail: ''})
        }
        else
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al generar la asignación del chofer.', detail: ''})
        console.log(err)
      }
    );
    
  }

  enable(){
    
  }

 async updateForm(rowData: any){
    this.validShow = true;
    this.formGroup.controls.code.setValue(rowData.code);
    this.formGroup.controls.type.setValue(this.typeList.find(type => rowData.type == type.value));
    this.formGroup.controls.description.setValue(rowData.description);
    this.formGroup.controls.country.setValue(this.countryList.find(country => rowData.country_code == country.value));
    this.formGroup.controls.latitude.setValue(rowData.latitude);
    this.formGroup.controls.longitude.setValue(rowData.longitude);
    this.formGroup.controls['code'].disable();
   // this.getStateList();
    this.validShow = true;
   // await this.getIndState(this.formGroup.controls['country'].value.value);
   // this.formGroup.controls.state.setValue(this.infoState.find(state => rowData.state_code == state.code));
    this.validShow = false;
    this.isUpdate=true;
  }

  async getVehiculeModelList(){
    this.validShow = false;
    const code = this.selectedBrand.code;
   this.modelList = await this.driverManagementService.getAllVehiculeModel(code).
            toPromise().then(response => { 
              return response
            });
  }

  async getVehiculeBrandList(){
    this.brandList = await this.driverManagementService.getAllVehicule().
            toPromise().then(response => {
              return response
            });
  }

  async getDriver(){
     this.driverList = await this.userManagementService.getUserChofer().
            toPromise().then(response => {
              return response
            });
    console.log(this.driverList)
  }

  setLincense(){
    this.formGroup.controls.license.setValue(this.selectedDriver.license);
  }
}
