import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { TableManagmentService } from 'src/app/core/services/consult/table-managment.service';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.scss']
})
export class BillingInformationComponent implements OnInit {

  page: any;
  quotesForm: FormGroup;
  packageList: any[] = [];

  constructor(
    private appConfig: AppConfigService,
    private tableManagmentService: TableManagmentService,
    private formBuilder: FormBuilder
    ) {   
    this.page = this.appConfig.invoiceCreation;
    this.page = this.page.default;
     }

  ngOnInit(): void {
  }

  resetForm() {
    this.quotesForm = this.formBuilder.group({
      date: ["2022/08/22",[Validators.required]],
      invoice: ["NE-XXXXXX-XX",[Validators.required]],
      shipper: ["Shipper Name",[Validators.required]],
      consignee: ["Consignee Name",[Validators.required]],
      agent: ["Agent Name",[Validators.required]],
      bill_to: ["Bill to Name",[Validators.required]],
      tracking: ["NE-XXXXXX-XX",[Validators.required]],
      branch: ["Branch",[Validators.required]],
      origin_destination: ["Origin Destination",[Validators.required]],
      final_destination: ["Final Destination",[Validators.required]],
      location: ["Location",[Validators.required]],
      
      
      
    });

  }

}
