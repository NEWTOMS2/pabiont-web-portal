import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedDriverManagementComponent } from './pages/assigned-driver-management.component';

const routes: Routes = [
  {
    path: '',
    component: AssignedDriverManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignedDriverManagementRoutingModule { }
