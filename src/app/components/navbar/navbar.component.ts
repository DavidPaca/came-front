import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  encapsulation: ViewEncapsulation.None // Esto puede ayudar con problemas de estilo
})
export class NavbarComponent {
  isNavbarOpen = false;
  selectedOption = '';
  dropdownOpen = false; // Controla la visibilidad del menú desplegable

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // setActive(option: string): void {
  //   this.selectedOption = option;
  //   this.isNavbarOpen = false; // Cierra el navbar en móviles después de seleccionar una opción
  //   this.dropdownOpen = false; // Cierra el menú desplegable
  // }

  toggleDropdown(option: string): void {
    if (this.selectedOption === option) {
      this.dropdownOpen = !this.dropdownOpen;
    } else {
      this.selectedOption = option;
      this.dropdownOpen = true;
    }
  }
  
  scrollto(sectionId: string) {
    const element = document.getElementById(sectionId);
    if(element) { 
        element.scrollIntoView({behavior: 'smooth', block: 'start' });
    }
  }

  setActive(option: string): void {
    // Para evitar efectos visuales extraños durante la navegación
    if (option === 'galeria') {
      // Primero configuramos las opciones
      this.selectedOption = option;
      // Cerramos después de un pequeño retraso
      setTimeout(() => {
        this.isNavbarOpen = false;
        this.dropdownOpen = false;
      }, 50);
    } else {
      // Comportamiento normal para otras opciones
      this.selectedOption = option;
      this.isNavbarOpen = false;
      this.dropdownOpen = false;
    }
  }
}
