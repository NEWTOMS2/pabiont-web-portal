import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "",
    loadChildren: () => import('./modules/menu/index/index.module')
      .then(m => m.IndexModule)
  },{
    path: "main",
    loadChildren: () => import('./modules/menu/main/main.module')
      .then(m => m.MainModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
