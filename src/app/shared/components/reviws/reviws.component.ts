import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';
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
  imports: [
    NgClass,
    NgFor,
    NgIf
  ],
  templateUrl: './reviws.component.html',
  styleUrls: ['./reviws.component.scss']
})
export class ReviwsComponent implements OnInit, OnDestroy {
  @Input() reviews: Review[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 3;
  stopedReview: boolean = false;
  expandedReviews: { [key: number]: boolean } = {}; // Objeto para controlar la expansión

  private readonly _stopReviews$ = new Subject<void>();

  @HostListener('window.resize')
  handleResize (): void {
    this.adjustItemsToShow();
  }

  ngOnInit(): void {
    this.adjustItemsToShow();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this._stopReviews$.next();
    this._stopReviews$.complete();
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
    interval(3000)
      .pipe(takeUntil(this._stopReviews$))
      .subscribe(() => {
        if (this.reviews.length > this.itemsToShow) {
          this.currentIndex = (this.currentIndex + 1) % (this.reviews.length - (this.itemsToShow - 1));
        }
      });
  }

  toggleReviews(): void {
    if (this.stopedReview) {
      // Reinicia el carrusel
      this.startAutoSlide();
    } else {
      // Detiene el carrusel
      this._stopReviews$.next();
    }
    this.stopedReview = !this.stopedReview; // Cambia el estado
  }


  toggleReadMore(index: number): void {
    // Solo cambia el estado de la reseña específica
    this.expandedReviews[index] = !this.expandedReviews[index];
  }

  truncateText(text: string, index: number): string {
    if (this.expandedReviews[index]) {
      return text;
    }

    const words = text.split(' ');
    if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
    }

    return text;
  }
  navigateToGoogle() {
    window.open('https://www.google.com/search?sca_esv=aa4709d8f74669be&sxsrf=AHTn8zoj8lh-kiLGFaMXT8FG53ZmOEMxpQ:1739209062674&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZC6xsZ4nn6BHEC4R3vwqPr7Ti7ZIUrsmdnf6hbpHbf6px3I4Qhz7hKJZkR8VdkyznkVUEj0tPB2AL2hHF79RVWMzqsBgf6ODczqqeR8rSZ9kfE5A_u0LKA0502tWnWucQ4AG0M%3D&q=M%C3%A1s+Que+Vacaciones+Agencia+de+viajes+Opiniones&sa=X&ved=2ahUKEwi9s_vS0rmLAxXKrpUCHeexLUkQ0bkNegQILhAD&biw=1366&bih=605&dpr=1#lrd=0x9105d1b811728b65:0xdc1cb95de5468ae1,1,,,,', '_blank');
  }
}
