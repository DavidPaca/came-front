import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  // Imágenes y contenido de cada slide
  slides = [
    {
      image: 'assets/images/slider/slider15.jpg',
      title: 'C.A.M.E.',
      title2: '“Corregir, Afrontar, Mantener, Explotar”',
      // title3: '“Corregir, Afrontar, Mantener, Explotar”',
      description: 'CENTRO DE APOYO ESCOLAR Y PEDAGÓGICO'
    },
    {
      image: 'assets/images/slider/slider8.jpg',
      title: '¡Descubre el potencial de tus hijos!',
      description: 'Nuestro centro de apoyo escolar está aquí para brindarles las herramientas y el acompañamiento que necesitan para triunfar en sus estudios'
    },
    {
      image: 'assets/images/slider/slider11.jpg',
      title: 'Disfruta aprendiendo',
      description: 'Transformamos el aprendizaje en una experiencia positiva y enriquecedora, ellos no solo aprenden, disfrutan aprendiendo'
    }
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  
}
