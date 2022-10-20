import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { RateManagementService } from 'src/app/core/services/general/rate-management.service';
import { CreateFormComponent } from '../components/create-form/create-form.component';

@Component({
  selector: 'app-rate-management',
  templateUrl: './rate-management.component.html',
  styleUrls: ['./rate-management.component.scss']
})
export class RateManagementComponent implements OnInit {

  //Page Variables
  page: any;
  visibleDialog: boolean = false;
  buttonIsEnabled: boolean = false;
  warehouseCode: string;
  rateList: any = [];

  //ViewChild Data
  @ViewChild(CreateFormComponent) child: CreateFormComponent;

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private rateManagementService: RateManagementService,
    private router:Router,
    ) { 
      this.page = this.appConfig.rateManagement;
      this.page = this.page.default;
      this.getRateList();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      });
    }
    

  ngOnInit(): void {
    console.log("hola")
  }

  async getRateList(){
    this.rateList = await this.rateManagementService.getRate(1).
            toPromise().then(response => { 
              return [response]
            });

          console.log( this.rateList)  
  }

  buttonEnabled(isValid: boolean){
    this.buttonIsEnabled = isValid;
  }

  selectedButton(data: any){ 
    this.visibleDialog = true;
    switch(data.buttonId) { 
      case 1:{
        this.child.updateForm(data.rowData)
        break;
      }
    }

  }

  hideDialog() {
    this.visibleDialog = false;
  }

  redirect(){
    this.router.navigate([`main`]);
  }


}
