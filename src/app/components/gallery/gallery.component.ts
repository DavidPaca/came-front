import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  // Array de imágenes para la galería
  images: GalleryImage[] = [];
  
  // Variables para el modal de pantalla completa
  selectedImage: GalleryImage | null = null;
  showModal: boolean = false;
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Cargar imágenes desde la ruta especificada
    this.loadImages();
  }

  loadImages(): void {
    // La ruta base de las imágenes
    const basePath = 'assets/images/gallery';
    
    // Crear el array con los nombres exactos y formatos correctos
    this.images = [
      { id: 1, url: `${basePath}/img1.jpg`, alt: 'Imagen 1' },
      { id: 2, url: `${basePath}/img2.jpg`, alt: 'Imagen 2' },
      { id: 3, url: `${basePath}/img3.jpg`, alt: 'Imagen 3' },
      { id: 4, url: `${basePath}/img4.jpg`, alt: 'Imagen 4' },
      { id: 5, url: `${basePath}/img5.jpg`, alt: 'Imagen 5' },
      { id: 6, url: `${basePath}/img6.jpg`, alt: 'Imagen 6' },
      { id: 7, url: `${basePath}/img7.jpg`, alt: 'Imagen 7' },
      { id: 8, url: `${basePath}/img8.jpg`, alt: 'Imagen 8' },
      { id: 9, url: `${basePath}/img9.jpg`, alt: 'Imagen 9' },
      { id: 9, url: `${basePath}/img10.jpg`, alt: 'Imagen 10' },
      { id: 9, url: `${basePath}/img11.jpg`, alt: 'Imagen 11' },
      { id: 9, url: `${basePath}/img12.jpg`, alt: 'Imagen 12' }
    ];
  }

  // Abrir imagen en pantalla completa
  openImage(index: number): void {
    this.currentIndex = index;
    this.selectedImage = this.images[index];
    this.showModal = true;
  }

  // Cerrar modal
  closeModal(): void {
    this.showModal = false;
    this.selectedImage = null;
  }

  // Navegar a la siguiente imagen
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  // Navegar a la imagen anterior
  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.selectedImage = this.images[this.currentIndex];
  }

  // Manejar eventos de teclado para navegación
  onKeyDown(event: KeyboardEvent): void {
    if (this.showModal) {
      if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      } else if (event.key === 'Escape') {
        this.closeModal();
      }
    }
  }
}