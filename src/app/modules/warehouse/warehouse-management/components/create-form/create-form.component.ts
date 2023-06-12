import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { LocationManagementService } from 'src/app/core/services/location/location-management.service';
import { WarehouseManagementService } from 'src/app/core/services/warehouse/warehouse-management.service';
import { WarehouseInformation } from 'src/app/shared/models/request/warehouseInformation-request.model';
declare var google: any

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  //Page Variables
  formGroup: FormGroup;//Dropdown data
  typeList: any[] = [
    { label: "Almacén", value: "Almacén" },
    { label: "Localidad", value: "Localidad" }
  ];
  countryList: any[] = [
    { label: "Venezuela", value: 1 },
    { label: "EEUU", value: 2 }
  ];
  warehouseRow: WarehouseInformation;
  isUpdate = false; 
  selectedPosition: any;
  options: any;
  dialogVisible: boolean = false;
  overlays: any[] = [];
  infoWindow: any;
  markerTitle?: string | null;
  draggable: boolean = false;
  stateList: any; 
  infoState: any;
  selectedLocation: any;
  validShow: boolean = true

  //INPUT AND OUPUTS
  @Output() updateList = new EventEmitter();
  @Output() buttonEnabled = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private warehouseManagementService: WarehouseManagementService,
    private locationManagementService: LocationManagementService,
    private messageService: MessageService,
  ) { 
    this.resetForm();
  }

  ngOnInit(): void {
   /* this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();*/
  }

  resetForm(){
    this.formGroup = this.formBuilder.group({
      code: ["", [Validators.required, Validators.maxLength(3),Validators.pattern('[a-zA-Z ]*')]],
      type: ["", Validators.required],
      description: ["", [Validators.required,Validators.pattern(/.*\S+.*/)]],
      country: ["", Validators.required],
      state: ["", Validators.required],
      latitude: ["", [Validators.required, Validators.pattern(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/) ]],
      longitude: ["", [Validators.required, Validators.pattern(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/)]]
    });
    this.validShow = true;
    this.formGroup.statusChanges.subscribe(status => {
      this.buttonEnabled.emit(status == "VALID" ? true : false);
    });
  }

  submit() {
    if(this.isUpdate){
      this.warehouseRow = new WarehouseInformation(
        this.formGroup.controls['code'].value, 
        this.formGroup.controls['type'].value.value, 
        this.formGroup.controls['description'].value, 
        this.selectedLocation.code, 
        this.formGroup.controls['latitude'].value,
        this.formGroup.controls['longitude'].value,
        )
    }else{
      this.warehouseRow = new WarehouseInformation(
        (this.formGroup.controls['code'].value).toUpperCase(), 
        this.formGroup.controls['type'].value.value, 
        this.formGroup.controls['description'].value, 
        this.selectedLocation.code, 
        this.formGroup.controls['latitude'].value,
        this.formGroup.controls['longitude'].value,
        1
        )
    }
    this.warehouseManagementService.saveWarehouse(this.warehouseRow, this.isUpdate).subscribe(
      response => {
        //cambios de post
        this.messageService.add({severity: 'success', summary: 'Almacén o Localidad creado correctamente.', detail: ''})
        this.updateList.emit();
      },
      err => {
        if((err.error).some(e => e.error_description === 'warehouse already exist')){
          this.messageService.add({severity: 'error', summary: 'el Almacén o Localidad ya existe, intente un código diferente.', detail: ''})
        }
        else
        this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al generar el Almacén o Localidad.', detail: ''})
        console.log(err)
      }
    );
    
  }

  enable(){
    this.formGroup.controls['code'].enable();
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
    this.getStateList();
    this.validShow = true;
    await this.getIndState(this.formGroup.controls['country'].value.value);
    this.formGroup.controls.state.setValue(this.infoState.find(state => rowData.state_code == state.code));
    this.validShow = false;
    this.isUpdate=true;
  }

  async getStateList(){
    this.validShow = false;
    const code = this.formGroup.controls['country'].value.value;
   this.stateList = await this.locationManagementService.getLocations(code).
            toPromise().then(response => { 
              return response
            });
  }

  async getIndState(code: string){
    this.infoState = await this.locationManagementService.getLocations(code).
            toPromise().then(response => {
              return response
              
            });
  }
/*
  handleMapClick(event: any) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({ position: { lat: 36.879466, lng: 30.667648 }, title: "Konyaalti" }),
        new google.maps.Marker({ position: { lat: 36.883707, lng: 30.689216 }, title: "Ataturk Park" }),
        new google.maps.Marker({ position: { lat: 36.885233, lng: 30.702323 }, title: "Oldtown" }),
        new google.maps.Polygon({
          paths: [
            { lat: 36.9177, lng: 30.7854 }, { lat: 36.8851, lng: 30.7802 }, { lat: 36.8829, lng: 30.8111 }, { lat: 36.9177, lng: 30.8159 }
          ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
        }),
        new google.maps.Circle({ center: { lat: 36.90707, lng: 30.56533 }, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500 }),
        new google.maps.Polyline({ path: [{ lat: 36.86149, lng: 30.63743 }, { lat: 36.86341, lng: 30.72463 }], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2 })
      ];
    }
  }

  addMarker() {
    this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
    }
  }

  handleDragEnd(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
  }
*/
}
