import { Component, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  page: any;

  constructor(private appConfig: AppConfigService) {
    this.page = this.appConfig.mainView;
    this.page = this.page.card
   }

  ngOnInit(): void {
  }

}
