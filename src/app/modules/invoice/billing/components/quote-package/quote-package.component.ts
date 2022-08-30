import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { packages } from 'src/app/shared/models/request/package-request';

@Component({
  selector: 'app-quote-package',
  templateUrl: './quote-package.component.html',
  styleUrls: ['./quote-package.component.scss']
})
export class QuotePackageComponent implements OnInit {

  page: any;
  packageRequest: packages; 
  packageList: any[] = [];
  packageInformation: any;
  displayDescription: boolean = false;
  description: string="";
  modalIsValid: boolean = true;
  @Output() FinalizeStep = new EventEmitter();

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService) {   
    this.page = this.appConfig.invoiceCreation;
    this.page = this.page.default;
     }

  ngOnInit(): void {
  }

  addToList(){
    //crear el modelo de datos y su constructor del json
    //crear la descripcion del paquete
    this.packageRequest = new packages(this.packageInformation.weight, this.packageInformation.high,this.packageInformation.width,this.packageInformation.long, this.description,0,1,this.packageInformation.type);    
    let volumeCalculation = Number(this.packageInformation.high * this.packageInformation.width * this.packageInformation.long).toFixed(0);
    this.packageList.push({
      size: `${this.packageInformation.high}x${this.packageInformation.width}x${this.packageInformation.long}`,
      weight: this.packageInformation.weight,
      volume: `${volumeCalculation}m3`,   
      description: this.description,
      price: this.packageInformation.price.toFixed(2),
      type: this.packageInformation.type,
      package_information: this.packageRequest
    });
    this.description = "";
    this.modalIsValid = true;
    this.FinalizeStep.emit(this.packageList);

  }

  prueba(){
    
    console.log(this.packageInformation)
  }

}
