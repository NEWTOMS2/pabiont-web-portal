import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  statusList: any[] = [
    { label: "En la tienda", value: "En la tienda" },
    { label: "En el almacen", value: "En el almacen" },
    { label: "En el camión", value: "En el camión" },
    { label: "En el avión", value: "En el avión" },
    { label: "En la embarcación", value: "En la embarcación" },
    { label: "En el puerto de Venezuela", value: "En el puerto de Venezuela" },
    { label: "En aduanas en Venezuela", value: "En aduanas en Venezuela" },
    { label: "En camino al almacen en Venezuela", value: "En camino al almacen en Venezuela" },
    { label: "Entregado a tienda en Venezuela", value: "Entregado a tienda en Venezuela" },
    { label: "Entregado", value: "Entregado" }
  ];

  constructor(
    private invoiceManagementService: InvoiceManagementService
    ) { 
  }

  ngOnInit(): void {
  }


  onRowEditInit(var123: any) {
    this.canEdit = true
    console.log(var123)
  }

  onRowEditSave(packageValue: any) {
    //Se Edita
    this.packageRow = new PackageInformation(
      packageValue.code,
      this.setStatusValue(packageValue.status),
      )
   
   this.invoiceManagementService.changePackage(this.packageRow).subscribe(
     response => {
       //cambios de post
       this.updateList.emit();
     },
     err => {
       console.log(err)
     }
   );
  }

  onRowEditCancel(product: any, index: number) {
    //Se Cancela
  } 

  setStatusValue(status: string){
    switch(status) { 
      case "En la tienda":{
        return 1
      }
      case "En el almacen":{
        return 2
      }
      case "En el camión":{
        return 3
      }
      case "En el avión":{
        return 4
      }
      case "En la embarcación":{
        return 5
      }
      case "En el puerto de Venezuela":{
        return 6
      }
      case "En aduanas en Venezuela":{
        return 7
      }
      case "En camino al almacen en Venezuela":{
        return 8
      }
      case "Entregado a tienda en Venezuela":{
        return 9
      }
      case "Entregado":{
        return 10
      }
      default: {
        return 0
      }

    }

  }

}
