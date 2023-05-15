import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateManagementRoutingModule } from './rate-management-routing.module';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RateManagementComponent } from './pages/rate-management.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [
    RateManagementComponent,
    CreateFormComponent,
  ],
  imports: [
    CommonModule,
    RateManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule
  ]
})
export class RateManagementModule { }
