import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesManagementComponent } from './quotes-management/quotes-management.component';

const routes: Routes = [
  {
    path: '',
    component: QuotesManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesManagementRoutingModule { }
