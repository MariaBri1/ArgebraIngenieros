import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
export interface Review {
  image: string;
  time: string;
  stars: number;
  text: string;
  name: string;
}

@Component({
  selector: 'app-reviws',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviws.component.html',
  styleUrls: ['./reviws.component.scss']
})
export class ReviwsComponent implements OnInit, OnDestroy {
  @Input() reviews: Review[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 3; // Número de reseñas a mostrar
  intervalId: any;

  ngOnInit(): void {
    this.adjustItemsToShow();
    window.addEventListener('resize', () => this.adjustItemsToShow());
    this.startAutoSlide();
  }

  adjustItemsToShow(): void {
    if (window.innerWidth < 768) {
      this.itemsToShow = 1;
    } else if (window.innerWidth < 1024) {
      this.itemsToShow = 2;
    } else {
      this.itemsToShow = 3;
    }
  }

  getStarsArray(numStars: number): number[] {
    return new Array(numStars);
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      if (this.reviews.length > this.itemsToShow) {
        this.currentIndex = (this.currentIndex + 1) % (this.reviews.length - (this.itemsToShow - 1));
      }
    }, 3000); // Cambio automático cada 3 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpiar intervalo al destruir el componente
  }
}
