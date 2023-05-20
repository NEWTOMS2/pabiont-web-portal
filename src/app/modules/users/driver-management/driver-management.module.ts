import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverManagementRoutingModule } from './driver-management-routing.module';
import { DriverManagementComponent } from './pages/driver-management.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    DriverManagementComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    DriverManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    InputMaskModule,
    ToastModule,
    CalendarModule
  ]
})
export class DriverManagementModule { }
