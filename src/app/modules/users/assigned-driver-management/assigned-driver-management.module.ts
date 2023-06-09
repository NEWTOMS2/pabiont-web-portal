import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignedDriverManagementRoutingModule } from './assigned-driver-management-routing.module';
import { AssignedDriverManagementComponent } from './pages/assigned-driver-management.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AssignedDriverManagementComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    AssignedDriverManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
  ]
})
export class AssignedDriverManagementModule { }
