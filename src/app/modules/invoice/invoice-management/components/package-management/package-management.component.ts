import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InvoiceManagementService } from 'src/app/core/services/invoice/invoice-management.service';
import { PackageInformation } from 'src/app/shared/models/request/packageInformation-request.model';

@Component({
  selector: 'app-package-management',
  templateUrl: './package-management.component.html',
  styleUrls: ['./package-management.component.scss']
})
export class PackageManagementComponent implements OnInit {

  //Page Variables
  canEdit: boolean = false;
  packageRow: PackageInformation

   //INPUT AND OUPUTS
 @Output() updateList = new EventEmitter();
 @Input() packageList: any[];
 @Input() invoice: any;


  statusList: any[] = [
    { label: "En Tienda", value: "En Tienda" },
    { label: "En Almacén", value: "En Almacén" },
    { label: "En Camión", value: "En Camión" },
    { label: "En Avión", value: "En Avión" },
    { label: "En Embarcación", value: "En Embarcación" },
    { label: "En el Puerto en Venezuela", value: "En el Puerto en Venezuela" },
    { label: "En Aduana en Venezuela", value: "En Aduana en Venezuela" },
    { label: "En Ruta al Almacén en Venezuela", value: "En Ruta al Almacén en Venezuela" },
    { label: "Entregado a Tienda en Venezuela", value: "Entregado a Tienda en Venezuela" },
    { label: "Entregado a Cliente", value: "Entregado a Cliente" }
  ];

  constructor(
    private invoiceManagementService: InvoiceManagementService,
    private messageService: MessageService,
    ) { 
  }

  ngOnInit(): void {
  }


  onRowEditInit() {
    this.canEdit = true
  }

  onRowEditSave(packageValue: any) {
    //Se Edita
    this.packageRow = new PackageInformation(
      parseInt(packageValue.code),
      this.setStatusValue(packageValue.status),
      )
   
   this.invoiceManagementService.changePackage(this.packageRow).subscribe(
    response => {
      //cambios de post
      this.messageService.add({severity: 'success', summary: 'Estatus del paquete modificado correctamente.', detail: ''});
      this.updateList.emit();
    },
    err => {
     this.messageService.add({severity: 'error', summary: 'Ha ocurrido un error al modificar el Estatus del paquete.', detail: ''})
     console.log(err)
    }
   );
  }

  onRowEditCancel(product: any, index: number) {
    window.location.reload()
  } 

  setStatusValue(status: string){
    switch(status) { 
      case "En Tienda":{
        return 1
      }
      case "En Almacén":{
        return 2
      }
      case "En Camión":{
        return 3
      }
      case "En Avión":{
        return 4
      }
      case "En Embarcación":{
        return 5
      }
      case "En el Puerto en Venezuela":{
        return 6
      }
      case "En Aduana en Venezuela":{
        return 7
      }
      case "En Ruta al Almacén en Venezuela":{
        return 8
      }
      case "Entregado a Tienda en Venezuela":{
        return 9
      }
      case "Entregado a Cliente":{
        return 10
      }
      default: {
        return 0
      }

    }

  }

}
