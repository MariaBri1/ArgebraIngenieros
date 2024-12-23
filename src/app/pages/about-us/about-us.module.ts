import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { AboutUsRoutingModule } from './about-us-routing.module'
import { AboutUsComponent } from './about-us.component'
@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    AboutUsRoutingModule,
    CommonModule,
    FooterComponent
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
