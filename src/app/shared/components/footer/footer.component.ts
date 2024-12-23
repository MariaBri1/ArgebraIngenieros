import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ROUTE_FAQ } from 'src/app/pages/constants/routes.constant'

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterModule
  ]

})
export class FooterComponent {
  readonly routeFaq = ROUTE_FAQ
}
