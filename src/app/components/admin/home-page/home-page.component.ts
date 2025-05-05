import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  username: string = '';
  
  constructor() {
    // Recuperar el usuario de la sesión
    const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.username = user.email;
    }
  }

  logout() {
    // Limpiar datos de sesión
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Redirigir al login (necesitarías inyectar el Router para esto)
    // this.router.navigate(['/login']);
  }

}
