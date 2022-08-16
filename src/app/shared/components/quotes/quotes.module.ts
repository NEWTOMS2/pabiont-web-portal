import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule
  ],
  exports:[
    QuotesComponent
  ]
})
export class QuotesModule { }
