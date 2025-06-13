import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsBookRoutingModule } from './complaints-book-routing.module';
import { ComplaintsBookComponent } from './complaints-book.component';

import { BannerComponent } from 'src/app/shared/components/banner/banner.component';



@NgModule({

  imports: [
    CommonModule,
    BannerComponent,
    ComplaintsBookRoutingModule
  ]
})
export class ComplaintsBookModule { }
