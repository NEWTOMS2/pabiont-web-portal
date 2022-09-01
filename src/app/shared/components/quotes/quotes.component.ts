import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  packageInformation: any;
  isValid: boolean = false;
  sizeValid: boolean = true;

  @Input() isSelectable: boolean;
  @Output() isClicked = new EventEmitter();

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
    if (( (this.quotesForm.controls['high'].value * 
      this.quotesForm.controls['width'].value * 
      this.quotesForm.controls['long'].value)/1728) > this.quotesForm.controls['weight'].value )
      return this.calculateMaritime = (( (this.quotesForm.controls['high'].value * 
      this.quotesForm.controls['width'].value * 
      this.quotesForm.controls['long'].value)/1728) * this.rates.maritime)
    else
      return this.calculateMaritime = (this.quotesForm.controls['weight'].value * this.rates.maritime)
  }

  calculateRateAerial(){
    if (( (this.quotesForm.controls['high'].value * 
    this.quotesForm.controls['width'].value * 
    this.quotesForm.controls['long'].value)/166) > this.quotesForm.controls['weight'].value )
    return this.calculateAerial = (( (this.quotesForm.controls['high'].value * 
    this.quotesForm.controls['width'].value * 
    this.quotesForm.controls['long'].value)/166) * this.rates.aerial)
  else
    return this.calculateAerial = (this.quotesForm.controls['weight'].value * this.rates.aerial)
  }

  resetForm() {
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [1,[Validators.required]],
      width: [1,[Validators.required]],
      long: [1,[Validators.required]],
      
    });
    this.quotesForm.statusChanges.subscribe(status => {
      this.isValid = status == "VALID" ? true : false;  
      });
      this.sizeValid = true;

  }

  setSmall(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [14,[Validators.required]],
      width: [14,[Validators.required]],
      long: [12,[Validators.required]],  
    });
    this.quotesForm.statusChanges.subscribe(status => {
      this.isValid = status == "VALID" ? true : false;
      });
      this.isValid = true;
      this.sizeValid = false;
  }
  setMedium(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [16,[Validators.required]],
      width: [16,[Validators.required]],
      long: [17,[Validators.required]],
    });
    this.quotesForm.statusChanges.subscribe(status => {
      this.isValid = status == "VALID" ? true : false;
      });
      this.isValid = true;
      this.sizeValid = false;
  }
  setLarge(){
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [22,[Validators.required]],
      width: [18,[Validators.required]],
      long: [18,[Validators.required]],
    });
    this.quotesForm.statusChanges.subscribe(status => {
      this.isValid = status == "VALID" ? true : false;
      });
      this.isValid = true;
      this.sizeValid = false;
  }

  setPackage(type: string){
    
    this.isValid = false
    this.packageInformation = {
      weight: this.quotesForm.controls['weight'].value,
      high: this.quotesForm.controls['high'].value,
      width: this.quotesForm.controls['width'].value,
      long: this.quotesForm.controls['long'].value,
      type: type, 
      price: type == "Maritimo" ? this.calculateMaritime : this.calculateAerial
    }
    this.isClicked.emit(this.packageInformation);
  }

  clearPackageInformation(){
    this.packageInformation = {};
    this.resetForm();
  }
}
