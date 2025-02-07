import { NgClass, NgFor } from '@angular/common';
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
    NgFor
  ],
  templateUrl: './reviws.component.html',
  styleUrls: ['./reviws.component.scss']
})
export class ReviwsComponent implements OnInit, OnDestroy {
  @Input() reviews: Review[] = [];
  currentIndex: number = 0;
  itemsToShow: number = 3; // Número de reseñas a mostrar
  stopedReview: boolean = false

  private readonly _stopReviews$ = new Subject<void>()

  @HostListener('window.resize')
  handleResize (): void {
    this.adjustItemsToShow()
  }

  ngOnInit(): void {
    this.adjustItemsToShow();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this._stopReviews$.next()
    this._stopReviews$.complete()
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
      })
  }

  stopReviews (): void {
    this._stopReviews$.next()
    this.stopedReview = true
  }
}
