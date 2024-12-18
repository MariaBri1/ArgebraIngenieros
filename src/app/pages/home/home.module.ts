import { NgModule } from '@angular/core'
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BannerComponent
  ]
})
export class HomeModule { }
