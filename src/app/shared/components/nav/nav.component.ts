import { NgFor } from '@angular/common'
import { Component, HostListener } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SECTIONS_ROUTES } from 'src/app/pages/constants/routes.constant'

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    NgFor,
    RouterModule
  ]
})
export class NavComponent {
  isScrolled = false
  routes = SECTIONS_ROUTES

  // Detectar el scroll de la ventana
  @HostListener('window:scroll', [])
  onWindowScroll (): void {
    this.isScrolled = window.scrollY > 20 // Cambia 50 según la cantidad de scroll que quieras detectar
  }
}
