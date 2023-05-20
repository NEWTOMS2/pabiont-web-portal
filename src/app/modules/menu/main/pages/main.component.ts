import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { UsersService } from 'src/app/core/services/security/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  page: any;
  menuType: any;
  getUser: any

  constructor(
    private appConfig: AppConfigService,
    private router:Router,
    private usersService: UsersService
    ) {
    this.page = this.appConfig.mainView;  
   this.getUser = this.usersService.getData('user');
    switch(this.getUser.rol){
      case "Administrador":
        this.menuType = this.page.admin
        break;
      case "Agente":
        this.menuType = this.page.agent
        break;
    }
   }

  ngOnInit(): void {
  
  }

  gotoPage(page: number) {
    switch(page){
      case 0: 
        this.router.navigate([`/invoice-creation`]);
        break;
      case 1: 
        this.router.navigate([`/client-management`]);
        break;
      case 2: 
        this.router.navigate([`/warehouse-management`]);
        break;
      case 3: 
        this.router.navigate([`/quotes-management`]);
        break;
      case 4: 
        this.router.navigate([`/invoice-management`]);
        break;
      case 5: 
        this.router.navigate([`/reports`]);
        break;
      case 6: 
        this.router.navigate([`/users-management`]);
        break;
      case 7: 
        this.router.navigate([`/rate-management`]);
        break;
      case 8: 
      this.router.navigate([`/driver-management`]);
      break;
    }
    
  }

}
