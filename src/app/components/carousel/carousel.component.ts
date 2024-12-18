import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  slides = [
    {
      image: "/assets/agil_peru_logo.jpg",
      title: 'Agil (Destinos Mundiales SAC)',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: '/assets/continental_travel_logo.jpg',
      title: 'Continental Travel SAC',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    },
    {
      image: 'assets/Mundo_Representaciones.jpg',
      title: 'Mundo Representaciones',
      description: 'proveedor con 10 años de experiencia especializado en el sector turistico'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 2000); // Mover cada 2 segundos
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
