// servicios.component.ts
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Servicio {
  icono: string;
  titulo: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1'
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ServiciosComponent {
  expandido: boolean = true;

  // Servicios iniciales (siempre visibles)
  serviciosPrincipales: Servicio[] = [
  {
    icono: 'engineering',
    titulo: 'Supervisión y ejecución de obras civiles'
  },
  {
    icono: 'architecture',
    titulo: 'Diseño y planificación de proyectos'
  },
  {
    icono: 'business',
    titulo: 'Gestión y consultoría de proyectos'
  },
  {
    icono: 'construction',
    titulo: 'Infraestructura y edificaciones'
  },
  {
    icono: 'eco',
    titulo: 'Proyectos sostenibles y energías renovables'
  }
];


  // Servicios adicionales (visibles al expandir)
  serviciosAdicionales: Servicio[] = [
  {
    icono: 'precision_manufacturing',
    titulo: 'Mantenimiento industrial y electromecánico'
  },
  {
    icono: 'plumbing',
    titulo: 'Instalaciones sanitarias y eléctricas'
  },
  {
    icono: 'foundation',
    titulo: 'Obras de cimentación y estructuras'
  },
  {
    icono: 'verified_user',
    titulo: 'Gestión de seguridad y control de calidad'
  },
  {
    icono: 'lightbulb',
    titulo: 'Innovación tecnológica en proyectos'
  }
];


  toggleExpansion() {
    this.expandido = !this.expandido;
  }


}
