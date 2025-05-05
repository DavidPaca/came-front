import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // Agregar la propiedad selectedOption
  selectedOption: string = '';

  // Agregar el método setActive
  setActive(option: string): void {
    this.selectedOption = option;
  }
}
