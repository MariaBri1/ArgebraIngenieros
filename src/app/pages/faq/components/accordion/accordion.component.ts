import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  imports: [
    NgClass
  ]
})
export class AccordionComponent {
  @Input() title?: string
  @Input() description?: string
   @Input() paragraphs?: string[];
  @Input() icon!: string;

  open: boolean = false

  handleClick(): void {
    this.open = !this.open
  }

  get accordionIcon(): string {
    return this.open ? 'fa-chevron-up' : 'fa-chevron-down'
  }
}
