import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';

import { TermsConditionsRoutingModule } from './terms-conditions-routing.module'
import { TermsConditionsComponent } from './terms-conditions.component'


@NgModule({

  imports: [
    TermsConditionsRoutingModule,
    CommonModule,
    BannerComponent,
    TermsConditionsComponent      
  ]
})
export class TermsConditionsModule { }
