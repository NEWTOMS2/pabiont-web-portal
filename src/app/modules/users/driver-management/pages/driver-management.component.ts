import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateFormComponent } from '../components/create-form/create-form.component';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.scss']
})
export class DriverManagementComponent implements OnInit {

  
  //Page Variables
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
    private userManagementService: UsersManagementService,
    private router:Router) 
    {
      this.page = this.appConfig.driverManagement;
      this.page = this.page.default;
      this.getUserList();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      }); 
    }

  ngOnInit(): void {
  }

  async getUserList(){
    this.userList = await this.userManagementService.getUserChofer().
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
      case 1:{
        this.child.updateForm(data.rowData)
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
