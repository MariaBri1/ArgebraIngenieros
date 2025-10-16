import { NgModule } from '@angular/core'
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'
import { FooterComponent } from 'src/app/shared/components/footer/footer.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

import { CommonModule } from '@angular/common'
import { CardsComponent } from 'src/app/shared/components/cards/cards.component'
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component'
import { ReviwsComponent } from 'src/app/shared/components/reviws/reviws.component'
import { ServiciosComponent } from 'src/app/shared/components/servicios/servicios.component'
import { GalleryComponent } from "../../shared/components/gallery/gallery.component"

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BannerComponent,
    FooterComponent,


        CommonModule,
        FooterComponent,
        CarouselComponent,
        CardsComponent,
        BannerComponent,
        ReviwsComponent,
        GalleryComponent,
        ServiciosComponent
  ]
})
export class HomeModule { }
