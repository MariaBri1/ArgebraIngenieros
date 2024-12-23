import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationPoliciesComponent } from './cancellation-policies.component';

const routes: Routes = [{ path: '', component: CancellationPoliciesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancellationPoliciesRoutingModule { }
