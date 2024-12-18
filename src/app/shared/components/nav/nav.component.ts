import { NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    NgStyle,
    RouterModule
  ]
})
export class NavComponent {
  @Input() urlImage?: string

  get backgroundImage (): string {
    return `url('/assets/images/${this.urlImage}')`
  }
}
