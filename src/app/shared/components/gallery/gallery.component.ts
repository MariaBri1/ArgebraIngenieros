import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  standalone: true,
  imports: [NgFor,
    NgIf
  ]
})
export class GalleryComponent {
  images = [
    '/assets/clientes/client-section/img1.jpg',
    '/assets/clientes/client-section/img2.jpg',
    '/assets/clientes/client-section/img3.jpg',
    '/assets/clientes/client-section/img4.jpg',
    '/assets/clientes/client-section/img5.jpg',
    '/assets/clientes/client-section/img6.jpg',
    '/assets/clientes/client-section/img7.jpg',
    '/assets/clientes/client-section/img8.jpg',
    '/assets/clientes/client-section/img9.jpg',
    '/assets/clientes/client-section/img10.jpg'
  ];

  showAllImages = false;
  selectedImage: string | null = null;

  toggleGallery(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showAllImages = !this.showAllImages;
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null; // Ahora solo cierra la imagen sin afectar la galería
  }
}

