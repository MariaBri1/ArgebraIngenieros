import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  imports: [
    NgFor,
    NgIf
  ]
})
export class GalleryComponent {
  images = [
    '/assets/clientes/client/img2.jpg',
    '/assets/clientes/client/img3.jpg',
    '/assets/clientes/client/img4.jpg',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',


  ];

  showAllImages = false;
  selectedImage: string | null = null;
  currentIndex = 0;
  allImages: string[] = [];



  highlightedImages: string[] = [];
  secondaryImages: string[] = [];
  initialImages: string[] = [];


  constructor() {
    this.prepareImages();
  }

  changeImages() {
    this.prepareImages();
  }

  toggleGallery(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showAllImages = !this.showAllImages;
  }

  openImage(img: string, index: number) {
    this.selectedImage = img;
    this.currentIndex = index;
  }

  closeImage(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.selectedImage = null;
  }

  navigateImage(direction: number, event: Event) {
    event.stopPropagation();
    const newIndex = this.currentIndex + direction;

    if (newIndex >= 0 && newIndex < this.images.length) {
      this.currentIndex = newIndex;
      this.selectedImage = this.images[newIndex];
    }
  }

  shuffleArray<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  prepareImages() {
    this.highlightedImages = this.images.slice(8, 14);
    this.secondaryImages = this.images.slice(6, 9);
    this.initialImages = this.images.slice(0, 6);
    this.allImages = this.images.slice(0, 25);
  }

}
