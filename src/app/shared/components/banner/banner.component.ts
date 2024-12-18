import { NgIf, NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title?: string
  @Input() urlImage?: string

  get backgroundImage (): string {
    return `url(/assets/images/${this.urlImage})`
  }
}
