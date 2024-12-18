import { NgModule } from '@angular/core';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';


@NgModule({
  declarations: [
    PackagesComponent
  ],
  imports: [
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
