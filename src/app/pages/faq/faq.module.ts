import { NgModule } from '@angular/core'

import { FaqRoutingModule } from './faq-routing.module'
import { FaqComponent } from './faq.component'

@NgModule({
  imports: [
    FaqRoutingModule,
    FaqComponent
  ]
})
export class FaqModule { }
