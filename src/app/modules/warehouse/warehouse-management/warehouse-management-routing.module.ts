import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseManagementComponent } from './pages/warehouse-management.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseManagementRoutingModule { }
