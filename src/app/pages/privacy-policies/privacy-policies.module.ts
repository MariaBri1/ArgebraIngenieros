import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';

import { PrivacyPoliciesRoutingModule } from './privacy-policies-routing.module';
import { PrivacyPoliciesComponent } from './privacy-policies.component';


@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    BannerComponent,
    PrivacyPoliciesComponent,
    PrivacyPoliciesRoutingModule
  ]
})
export class PrivacyPoliciesModule { }
