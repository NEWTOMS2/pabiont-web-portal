import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientManagementRoutingModule } from './client-management-routing.module';
import { ClientManagementComponent } from './pages/client-management.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [
    ClientManagementComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    ClientManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    InputMaskModule,
  ]
})
export class ClientManagementModule { }
