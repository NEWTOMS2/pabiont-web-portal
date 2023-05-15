import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsModule } from './reports.module';
import { ReportsComponent } from './pages/reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
