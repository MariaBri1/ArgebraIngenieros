import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: async () => (await import('./home/home.module')).HomeModule
      },
      {
        path: 'about-us',
        loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule
      },
      {
        path: 'packages',
        loadChildren: async () => (await import('./packages/packages.module')).PackagesModule
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
