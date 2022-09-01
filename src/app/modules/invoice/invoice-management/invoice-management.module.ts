import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagementRoutingModule } from './invoice-management-routing.module';
import { InvoiceManagementComponent } from './pages/invoice-management.component';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { PackageManagementComponent } from './components/package-management/package-management.component';
import { TableModule } from 'primeng/table';
import { QuotesModule } from 'src/app/shared/components/quotes/quotes.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    InvoiceManagementComponent,
    CreateFormComponent,
    PackageManagementComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    FormsModule,
    QuotesModule,
    ToastModule,
  ]
})
export class InvoiceManagementModule { }
