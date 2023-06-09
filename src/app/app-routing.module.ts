import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from './core/guard/login/check-login.guard';
import { CheckRoleGuard } from './core/guard/role/check-role.guard';

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
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  {
    path: "users-management",
    loadChildren: () => import('./modules/users/users-management/users-management.module')
      .then(m => m.UsersManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  {
    path: "client-management",
    loadChildren: () => import('./modules/users/client-management/client-management.module')
      .then(m => m.ClientManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador','Agente']
      }
  },
  {
    path: "driver-management",
    loadChildren: () => import('./modules/users/driver-management/driver-management.module')
      .then(m => m.DriverManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  {
    path: "assigned-driver-management",
    loadChildren: () => import('./modules/users/assigned-driver-management/assigned-driver-management.module')
      .then(m => m.AssignedDriverManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  {
    path: "invoice-management",
    loadChildren: () => import('./modules/invoice/invoice-management/invoice-management.module')
      .then(m => m.InvoiceManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador','Agente']
      }
  },
  {
    path: "quotes-management",
    loadChildren: () => import('./modules/quotes-management/quotes-management.module')
      .then(m => m.QuotesManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador','Agente']
      }
  },
  {
    path: "invoice-creation",
    loadChildren: () => import('./modules/invoice/billing/billing.module')
      .then(m => m.BillingModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador','Agente']
      }
  },
  {
    path: "rate-management",
    loadChildren: () => import('./modules/general/rate-management/rate-management.module')
      .then(m => m.RateManagementModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  {
    path: "reports",
    loadChildren: () => import('./modules/general/reports/reports.module')
      .then(m => m.ReportsModule),
      canActivate:[CheckLoginGuard, CheckRoleGuard],
      data: {
        roles: ['Administrador']
      }
  },
  { path: '**', redirectTo: `/` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
