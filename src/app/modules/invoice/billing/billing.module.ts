import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './pages/billing.component';
import { QuotePackageComponent } from './components/quote-package/quote-package.component';
import { BillingInformationComponent } from './components/billing-information/billing-information.component';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';
import { QuotesModule } from 'src/app/shared/components/quotes/quotes.module';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    BillingComponent,
    QuotePackageComponent,
    BillingInformationComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    QuotesModule,   
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class BillingModule { }
