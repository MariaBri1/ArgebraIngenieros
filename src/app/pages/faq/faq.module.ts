import { NgModule } from '@angular/core'

import { BannerComponent } from 'src/app/shared/components/banner/banner.component'
import { FaqRoutingModule } from './faq-routing.module'
import { FaqComponent } from './faq.component'

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    FaqRoutingModule,
    BannerComponent
  ]
})
export class FaqModule { }
