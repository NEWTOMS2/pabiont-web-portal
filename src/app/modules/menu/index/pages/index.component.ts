import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexService } from 'src/app/core/services/menu/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  quotesForm: FormGroup;
  rates: any;

  constructor( 
    private formBuilder: FormBuilder,
    private indexService: IndexService
    ) {
      this.resetForm();
   }

  async ngOnInit() {
    this.rates = await this.getRate();
    console.log(this.rates)
  }

  resetForm() {
    this.quotesForm = this.formBuilder.group({
      weight: [null,[Validators.required]],
      high: [null,[Validators.required]],
      width: [null,[Validators.required]],
      long: [null,[Validators.required]],
    })
  }

  async getRate(){
    return this.indexService.getRate(1).toPromise().then(response => {return response})
  }

}
