import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  page: any;

  constructor(
    private appConfig: AppConfigService,
    private router:Router
    ) {
    this.page = this.appConfig.mainView;
    this.page = this.page.card
   }

  ngOnInit(): void {
  
  }

  gotoPage(page: number) {
    switch(page){
      case 0: 
        this.router.navigate([`/main`]);
        break;
      case 1: 
        this.router.navigate([`/users-management`]);
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
        this.router.navigate([`/main`]);
        break;
    }
    
  }

}
