import { NgModule } from '@angular/core'
import { CarouselComponent } from 'src/app/components/carousel/carousel.component'
import { AboutUsRoutingModule } from './about-us-routing.module'
import { AboutUsComponent } from './about-us.component'
@NgModule({
  declarations: [
    AboutUsComponent,
    CarouselComponent
  ],
  imports: [
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
