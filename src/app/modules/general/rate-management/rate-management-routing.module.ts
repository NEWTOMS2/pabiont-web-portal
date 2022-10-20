import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateManagementComponent } from './pages/rate-management.component';

const routes: Routes = [
  {
    path: '',
    component: RateManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateManagementRoutingModule { }
