import { Component, HostListener, Input, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable, Observer } from 'rxjs';
import { TrackingResponse } from 'src/app/core/http/models/response/tracking-response';
import { AppConfigService } from 'src/app/core/services/app-config/app-config.service';
import { IndexService } from 'src/app/core/services/menu/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [MessageService]
})
export class IndexComponent implements OnInit {

  quotesForm: FormGroup;
  searchForm: FormGroup;
  rates: any = [];
  tracking: any = null;
  emailPattern: any = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  calculateMaritime: number;
  calculateAerial: Number;
  page: any;
  //table Data
  headerList: any[];
  bodyList: any[];
  searchField: any[];
  //ocultar section
  isSubmit: boolean = false;
  showWebChat: boolean = false;

  constructor( 
    private formBuilder: FormBuilder,
    private indexService: IndexService,
    private appConfig: AppConfigService,
    private messageService: MessageService
    ) {
      this.page = this.appConfig.index;
      this.page = this.page.default;
      this.bodyList = this.page.testData
      this.headerList = [
        { field: 'index', header: 'Paquete' },
        { field: 'Code', header: 'Código Tracking' },
        { field: 'description', header: 'Descripción' },
        { field: 'status', header: 'Estatus' }
      ];
      this.resetForm();
      this.getRate();
      this.trackingForm();
   }

  ngOnInit() {
    
    }
      
  

  resetForm() {
    this.quotesForm = this.formBuilder.group({
      weight: [1,[Validators.required]],
      high: [14,[Validators.required]],
      width: [14,[Validators.required]],
      long: [12,[Validators.required]],
      
    });

  }

  trackingForm() {
    this.searchForm = this.formBuilder.group({
      searchInput: ["",[Validators.required]]
    });
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

  async searchPackage(text: string){
    if (text.match(this.emailPattern)) {
      this.tracking = await this.indexService.getTrackingByEmail(text).toPromise().then(response => {return response?.data});
      if (this.tracking.length == 0){
        this.messageService.add({key: 'tc', severity:'warn', summary: 'No hay Informacion', detail: 'No existen paquetes enviados con este correo'});
        this.isSubmit=false;
      }
      else
        this.isSubmit=true;
    }
    else if(text.match("^[A-Za-z0-9-]*$") ){
      this.tracking = await this.indexService.getTrackingByCode(text).toPromise().then(response => {return response?.data});
      if (this.tracking.length == 0){
        this.messageService.add({key: 'tc', severity:'warn', summary: 'No hay Informacion', detail: 'No existe este codigo de tracking'});
        this.isSubmit=false;
      }
      else
        this.isSubmit=true;
    }
    else{
      this.messageService.add({key: 'tc', severity:'error', summary: 'Formato Incorrecto', detail: 'Codigo de tracking o correo invalido'});
      this.isSubmit=false;
    }
    
    
  }

  public openForm() {
    this.showWebChat = true;
  }
  
  public closeForm() {
    this.showWebChat = false;
  }



}
