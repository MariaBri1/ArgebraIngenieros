import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_FAQ, ROUTE_HOME } from './constants/routes.constant'
import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: ROUTE_HOME.path,
        loadChildren: async () => (await import('./home/home.module')).HomeModule
      },
      {
        path: ROUTE_ABOUT.path,
        loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule
      },
      {
        path: 'packages',
        loadChildren: async () => (await import('./packages/packages.module')).PackagesModule
      },
      {
        path: ROUTE_FAQ.path,
        loadChildren: async () => (await import('./faq/faq.module')).FaqModule
      },
      {
        path: ROUTE_CONTACT.path,
        loadChildren: async () => (await import('./contact-us/contact-us.module')).ContactUsModule
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
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
