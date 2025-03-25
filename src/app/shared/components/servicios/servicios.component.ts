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
  expandido: boolean = false;

  // Servicios iniciales (siempre visibles)
  serviciosPrincipales: Servicio[] = [
    {
      icono: 'flight',
      titulo: 'Boletos nacionales e internacionales'
    },
    {
      icono: 'hiking',
      titulo: 'Full days'
    },
    {
      icono: 'directions_boat',
      titulo: 'Crucero '
    }
  ];

  // Servicios adicionales (visibles al expandir)
  serviciosAdicionales: Servicio[] = [
    {
      icono: 'gavel',
      titulo: 'Asesoría Legal Tributaria'
    },
    {
      icono: 'business',
      titulo: 'Consultoría en Comercio Exterior'
    },
    {
      icono: 'security',
      titulo: 'Implementación de Programas de Integridad'
    }
  ];

  toggleExpansion() {
    this.expandido = !this.expandido;
  }
}
