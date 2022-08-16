import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexService } from 'src/app/core/services/menu/index.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {


  rates: any = [];
  calculateMaritime: number;
  calculateAerial: Number;
  quotesForm: FormGroup;

  constructor(
    private indexService: IndexService,
    private formBuilder: FormBuilder
    ) 
    { 
      this.resetForm();
      this.getRate();
    }

  ngOnInit(): void {
  }

  async getRate(){
    this.rates = await this.indexService.getRate(1).toPromise().then(response => {return response?.data})
    //aqui se coloca el id de la empresa
  }

  calculateRateMaritime(){
    return this.calculateMaritime = ( this.rates.maritime * 
                            this.quotesForm.controls['high'].value * 
                            this.quotesForm.controls['width'].value * 
                            this.quotesForm.controls['long'].value)/166
  }

  calculateRateAerial(){
    if (this.quotesForm.controls['weight'].value > ( this.quotesForm.controls['long'].value * 
      this.quotesForm.controls['high'].value * 
      this.quotesForm.controls['width'].value ))

      return this.calculateAerial = ( this.rates.aerial * 
        this.quotesForm.controls['high'].value * 
        this.quotesForm.controls['width'].value * 
        this.quotesForm.controls['long'].value) *
        this.quotesForm.controls['weight'].value /166
   else   
    return this.calculateAerial = ( this.rates.aerial * 
                            this.quotesForm.controls['high'].value * 
                            this.quotesForm.controls['width'].value * 
                            this.quotesForm.controls['long'].value)/166
  }

  resetForm() {
    this.quotesForm = this.formBuilder.group({
      weight: [0,[Validators.required]],
      high: [0,[Validators.required]],
      width: [0,[Validators.required]],
      long: [0,[Validators.required]],
      
    });

  }

  setSmall(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [14,[Validators.required]],
      width: [14,[Validators.required]],
      long: [12,[Validators.required]],
      
    });
  }
  setMedium(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [16,[Validators.required]],
      width: [16,[Validators.required]],
      long: [17,[Validators.required]],
      
    });
  }
  setLarge(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [22,[Validators.required]],
      width: [18,[Validators.required]],
      long: [18,[Validators.required]],
      
    });
  }

}
