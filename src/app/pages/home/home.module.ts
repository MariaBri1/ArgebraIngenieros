import { NgModule } from '@angular/core'
import { FooterComponent } from 'src/app/components/footer/footer.component'
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BannerComponent,
    FooterComponent
  ]
})
export class HomeModule { }
