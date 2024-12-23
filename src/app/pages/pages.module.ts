import { NgModule } from '@angular/core'
import { FooterComponent } from '../shared/components/footer/footer.component'
import { NavComponent } from '../shared/components/nav/nav.component'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    NavComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class PagesModule { }
