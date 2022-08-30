import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './core/guard/check-login.guard';

const routes: Routes = [
  
  {
    path: "",
    loadChildren: () => import('./modules/menu/index/index.module')
      .then(m => m.IndexModule)
  },
  {
    path: "main",
    loadChildren: () => import('./modules/menu/main/main.module')
      .then(m => m.MainModule),
      canActivate:[CheckLoginGuard],
  },
  {
    path: "login",
    loadChildren: () => import('./modules/security/login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: "warehouse-management",
    loadChildren: () => import('./modules/warehouse/warehouse-management/warehouse-management.module')
      .then(m => m.WarehouseManagementModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: "users-management",
    loadChildren: () => import('./modules/users/users-management/users-management.module')
      .then(m => m.UsersManagementModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: "client-management",
    loadChildren: () => import('./modules/users/client-management/client-management.module')
      .then(m => m.ClientManagementModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: "invoice-management",
    loadChildren: () => import('./modules/invoice/invoice-management/invoice-management.module')
      .then(m => m.InvoiceManagementModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: "quotes-management",
    loadChildren: () => import('./modules/quotes-management/quotes-management.module')
      .then(m => m.QuotesManagementModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: "invoice-creation",
    loadChildren: () => import('./modules/invoice/billing/billing.module')
      .then(m => m.BillingModule),
      canActivate:[CheckLoginGuard]
  },
  { path: '**', redirectTo: `/` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
