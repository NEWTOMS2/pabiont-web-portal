import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseManagementRoutingModule } from './warehouse-management-routing.module';
import { WarehouseManagementComponent } from './pages/warehouse-management.component';
import { ConsultModule } from 'src/app/shared/components/tables/consult.module';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { GMapModule } from 'primeng/gmap';


@NgModule({
  declarations: [
    WarehouseManagementComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    WarehouseManagementRoutingModule,
    ConsultModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
    GMapModule
  ]
})
export class WarehouseManagementModule { }
