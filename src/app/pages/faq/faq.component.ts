import { NgFor } from '@angular/common'
import { Component } from '@angular/core'
import { BannerComponent } from 'src/app/shared/components/banner/banner.component'
import { AccordionComponent } from './components/accordion/accordion.component'
import { type Faq, FAQS } from './constants/faq.constant'

@Component({
  standalone: true,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [
    NgFor,
    BannerComponent,
    AccordionComponent
  ]
})
export class FaqComponent {
  readonly faqs: Faq[] = FAQS
}
