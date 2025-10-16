import { CommonModule, NgIf, NgStyle } from '@angular/common'; // Asegúrate de importar CommonModule
import { Component, Input } from '@angular/core'
import { type SafeResourceUrl } from '@angular/platform-browser'

@Component({
  standalone: true,
  selector: 'app-banner',
  imports: [
    CommonModule, // Agrega esto para que `ngIf` y otras directivas funcionen
    NgIf,
    NgStyle
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() title?: string
  @Input() urlImage?: string
  @Input() videoUrl?: string | SafeResourceUrl
  @Input() isVideo: boolean = false

  get backgroundImage (): string {
    return `url(/assets/images/${this.urlImage})`
  }

  
  
}
