import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { WarehouseManagementService } from 'src/app/core/services/warehouse/warehouse-management.service';
import { CreateFormComponent } from '../components/create-form/create-form.component';

@Component({
  selector: 'app-warehouse-management',
  templateUrl: './warehouse-management.component.html',
  styleUrls: ['./warehouse-management.component.scss']
})
export class WarehouseManagementComponent implements OnInit {

  //Page Variables
  page: any;
  visibleDialog: boolean = false;
  buttonIsEnabled: boolean = false;
  warehouseCode: string;
  warehouseList: any[] = []

  //ViewChild Data
  @ViewChild(CreateFormComponent) child: CreateFormComponent;

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private warehouseManagementService: WarehouseManagementService,
    private router:Router
    ) { 
      this.page = this.appConfig.warehouseManagement;
      this.page = this.page.default;
      this.getWarehouseList();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      });
    }
    

  ngOnInit(): void {
  }

  async getWarehouseList(){
    this.warehouseList = await this.warehouseManagementService.getWarehouses().
            toPromise().then(response => { 
              return response
            });
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
