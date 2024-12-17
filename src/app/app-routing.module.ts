import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'conocenos', loadChildren: () => import('./pages/conocenos/conocenos.module').then(m => m.ConocenosModule) },
  { path: 'paquetes', loadChildren: () => import('./pages/packages/packages.module').then(m => m.PackagesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
