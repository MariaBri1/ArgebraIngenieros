import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationPoliciesRoutingModule } from './cancellation-policies-routing.module';
import { CancellationPoliciesComponent } from './cancellation-policies.component';


@NgModule({
  declarations: [
    CancellationPoliciesComponent
  ],
  imports: [
    CommonModule,
    CancellationPoliciesRoutingModule
  ]
})
export class CancellationPoliciesModule { }
