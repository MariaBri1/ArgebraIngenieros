import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component'
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
    FooterComponent,
    CarouselComponent
  ],
  exports: [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
