import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FooterComponent } from '../shared/components/footer/footer.component'
import { GalleryComponent } from '../shared/components/gallery/gallery.component'
import { NavComponent } from '../shared/components/nav/nav.component'
import { ReviwsComponent } from '../shared/components/reviws/reviws.component'
import { PagesRoutingModule } from './pages-routing.module'
import { PagesComponent } from './pages.component'
@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule,
    NavComponent,
    FooterComponent,
    ReviwsComponent,
    CommonModule,
    GalleryComponent
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
})
export class PagesModule { }
