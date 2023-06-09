import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateFormComponent } from '../components/create-form/create-form.component';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/core/services/drivers/drivers.service';

@Component({
  selector: 'app-assigned-driver-management',
  templateUrl: './assigned-driver-management.component.html',
  styleUrls: ['./assigned-driver-management.component.scss']
})
export class AssignedDriverManagementComponent implements OnInit {

  page: any;
  visibleDialog: boolean = false;
  buttonIsEnabled: boolean = false;
  userCode: string;
  userList: any[] = [];
  currentStep: number = -1;

  //ViewChild Data
  @ViewChild(CreateFormComponent) child: CreateFormComponent;

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private driverManagementService: DriversService,
    private router:Router) 
    {
      this.page = this.appConfig.assigned_driverManagement;
      this.page = this.page.default;
      this.getAllDrivers();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      }); 
    }

  ngOnInit(): void {
  }

  async getAllDrivers(){
    this.userList = await this.driverManagementService.getAllDrivers().
            toPromise().then(response => { 
              return response
            });
  }

  buttonEnabled(isValid: boolean){
    this.buttonIsEnabled = isValid;
  }

  selectedButton(data: any){ 
    this.visibleDialog = true;
    this.currentStep = data.buttonId
    switch(data.buttonId) { 
      case 0:{
        this.child.enable()
        break;
      }
    }

  }

  hideDialog() {
    this.visibleDialog = false;
    this.currentStep = -1
  }

  redirect(){
    this.router.navigate([`main`]);
  }
}
