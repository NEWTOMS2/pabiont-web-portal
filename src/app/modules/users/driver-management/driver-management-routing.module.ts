import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverManagementComponent } from './pages/driver-management.component';

const routes: Routes = [
  {
    path: '',
    component: DriverManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverManagementRoutingModule { }
