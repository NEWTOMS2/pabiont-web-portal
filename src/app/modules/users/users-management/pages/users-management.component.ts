import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';
import { UsersManagementService } from 'src/app/core/services/users/users-management.service';
import { CreateFormComponent } from '../components/create-form/create-form.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  //Page Variables
  page: any;
  visibleDialog: boolean = false;
  buttonIsEnabled: boolean = false;
  userCode: string;
  userList: any[] = [];

  //ViewChild Data
  @ViewChild(CreateFormComponent) child: CreateFormComponent;

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private userManagementService: UsersManagementService,
    private router:Router) 
    {
      this.page = this.appConfig.userManagement;
      this.page = this.page.default;
      this.getUserList();
      this.tableManagmentService.buttonEvent.subscribe(data => {
        this.selectedButton(data);
      }); 
    }

  ngOnInit(): void {
  }

  async getUserList(){
    this.userList = await this.userManagementService.getUser().
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
