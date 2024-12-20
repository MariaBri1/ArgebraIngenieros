import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [RouterModule]
})
export class NavComponent {
  isScrolled = false

  // Detectar el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll (): void {
    this.isScrolled = window.scrollY > 20 // Cambia 50 según la cantidad de scroll que quieras detectar
  }
}
