import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { AboutUsComponent } from './about-us.component'

const routes: Routes = [{ path: '', component: AboutUsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
