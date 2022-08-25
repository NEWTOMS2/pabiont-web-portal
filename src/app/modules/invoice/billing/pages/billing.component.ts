import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  currentStep: number = 2;
  packageList: any;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(){
    switch(this.currentStep){
      case 1:
        this.currentStep = 2;
        break;
      case 2:
        this.currentStep = 3;
        break;
    }
  }

  

}
