import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'Carla Quishpe',
      role: 'Economista',
      bio: 'Durante el tiempo de mi profesión me he desenvuelto en varias actividades educativas: docente de primaria y secundaria, apoyo de proyectos de investigación, asesoría de tesis, tareas dirigidas, y acompañamiento escolar. También he realizado actividades contables y administrativas.',
      image: 'assets/images/team/cq1.png',
    },
    {
      name: 'David Paca',
      role: 'Ingeniero en Sistemas y Computación',
      bio: 'Soy desarrollador de software autodidacta con cuatro años de experiencia. A la vez, tengo el conocimiento de reparación y mantenimiento de computadoras de escritorio y laptops. Busco nuevos desafíos para aplicar mis conocimientos.',
      image: 'assets/images/team/pd1.png',
    },
  ];
}
