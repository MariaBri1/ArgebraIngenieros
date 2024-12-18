import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { ConocenosRoutingModule } from './conocenos-routing.module';
import { ConocenosComponent } from './conocenos.component';


@NgModule({
  declarations: [
    ConocenosComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ConocenosRoutingModule
  ]
})
export class ConocenosModule { }
