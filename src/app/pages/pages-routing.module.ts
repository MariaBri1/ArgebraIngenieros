import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { ROUTE_ABOUT, ROUTE_BOOK, ROUTE_CANCELLATION_POLICIES, ROUTE_CONTACT, ROUTE_FAQ, ROUTE_HOME, ROUTE_NEW_ADVENTURE, ROUTE_PACKAGES, ROUTE_PRIVACY_POLICIES, ROUTE_TERMSCONDITIONS } from './constants/routes.constant'
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
        path: ROUTE_PACKAGES.path,
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
        path: ROUTE_NEW_ADVENTURE.path,
        loadChildren: async () => (await import('./new-adventure/new-adventure.module')).NewAdventureModule
      },
      {
        path: ROUTE_BOOK.path,
        loadChildren: async () => (await import('./complaints-book/complaints-book.module')).ComplaintsBookModule
      },
      {
        path: ROUTE_TERMSCONDITIONS.path,
        loadChildren: async () => (await import('./terms-conditions/terms-conditions.module')).TermsConditionsModule
      },
      {
        path: ROUTE_PRIVACY_POLICIES.path,
        loadChildren: async () => (await import('./privacy-policies/privacy-policies.module')).PrivacyPoliciesModule
      },
      {
        path: ROUTE_CANCELLATION_POLICIES.path,
        loadChildren: async () => (await import('./cancellation-policies/cancellation-policies.module')).CancellationPoliciesModule
      },
      {
        path: 'destinations',
        loadChildren: async () => await import('./destinations/destinations.module').then(m => m.DestinationsModule)
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
