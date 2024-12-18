import { NgModule } from '@angular/core'

import { NavComponent } from '../shared/components/nav/nav.component'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    NavComponent
  ]
})
export class PagesModule { }
