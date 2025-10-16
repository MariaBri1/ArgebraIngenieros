// ✅ packages.module.ts
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { PackagesRoutingModule } from './packages-routing.module'
import { PackagesComponent } from './packages.component'

// 👇 Importa tu componente compartido Banner
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'

@NgModule({
  declarations: [
    PackagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PackagesRoutingModule,
    BannerComponent // 👈 se agrega AQUÍ, no en routing
  ]
})
export class PackagesModule { }
