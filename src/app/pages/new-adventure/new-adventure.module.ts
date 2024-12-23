import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAdventureRoutingModule } from './new-adventure-routing.module';
import { NewAdventureComponent } from './new-adventure.component';


@NgModule({
  declarations: [
    NewAdventureComponent
  ],
  imports: [
    CommonModule,
    NewAdventureRoutingModule
  ]
})
export class NewAdventureModule { }
