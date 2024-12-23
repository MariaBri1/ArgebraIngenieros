import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintsBookRoutingModule } from './complaints-book-routing.module';
import { ComplaintsBookComponent } from './complaints-book.component';


@NgModule({
  declarations: [
    ComplaintsBookComponent
  ],
  imports: [
    CommonModule,
    ComplaintsBookRoutingModule
  ]
})
export class ComplaintsBookModule { }
