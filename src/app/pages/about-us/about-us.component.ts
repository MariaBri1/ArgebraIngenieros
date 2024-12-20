import { Component, type OnDestroy, type OnInit } from '@angular/core'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/logos/agil_peru_logo.png',
      title: 'Agil (Destinos Mundiales SAC)',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/continental_travel_logo.jpg',
      title: 'Continental Travel SAC',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/mundo_representaciones.png',
      title: 'Mundo Representaciones',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/logo-dm.png',
      title: 'Destinos Mundiales',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/Dynamics Inkasiko.png',
      title: 'Dynamics Inkasiko',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/conexion-logo.png',
      title: 'ConexiónTS',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/logo-eua.png',
      title: 'Euroamerican Assistance',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/Posada-tumpis-logo.png',
      title: 'Posada de Los Tumpis',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/cumbaza-hoteles-logo.png',
      title: 'Río Cumbaza Hotel',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/logos/domiruth-logo.png',
      title: 'DOMIRUTH TRAVEL SERVICE',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    }
  ]

  currentIndex = 0
  intervalId: any

  ngOnInit (): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    }, 3000) // Mover cada 3 segundos
  }

  ngOnDestroy (): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }
}
