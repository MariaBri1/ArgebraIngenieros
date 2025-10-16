import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { FormsModule } from '@angular/forms';

import { ContactUsRoutingModule } from './contact-us-routing.module'
import { ContactUsComponent } from './contact-us.component'

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    BannerComponent,
    ContactUsRoutingModule,
    ContactUsComponent
  ]
})
export class ContactUsModule { }
