import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesManagementRoutingModule } from './quotes-management-routing.module';
import { QuotesManagementComponent } from './quotes-management/quotes-management.component';
import { QuotesComponent } from 'src/app/shared/components/quotes/quotes.component';
import { QuotesModule } from 'src/app/shared/components/quotes/quotes.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    QuotesManagementComponent
  ],
  imports: [
    CommonModule,
    QuotesManagementRoutingModule,
    QuotesModule,
    ButtonModule
  ]
})
export class QuotesManagementModule { }
