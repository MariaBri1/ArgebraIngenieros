import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdventureRoutingModule } from './new-adventure-routing.module';
import { NewAdventureComponent } from './new-adventure.component';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'

@NgModule({
  declarations: [
    NewAdventureComponent
  ],
  imports: [
    CommonModule,
    NewAdventureRoutingModule,
        BannerComponent
  ]
})
export class NewAdventureModule { }
