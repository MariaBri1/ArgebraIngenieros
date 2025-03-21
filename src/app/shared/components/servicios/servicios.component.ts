// servicios.component.ts
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Servicio {
  icono: string;
  titulo: string;
  descripcion: string;
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
      icono: 'description',
      titulo: 'Compliance – Revisión de cumplimiento normativo del OCE, OI y terceros',
      descripcion: 'Busca prevenir la configuración de infracciones y sanciones de los OCE, OI y terceros ante la SUNAT – Administración Aduanera.'
    },
    {
      icono: 'fact_check',
      titulo: 'Asesoría en implementación del sistema de prevención de LAFT – UIF',
      descripcion: 'Busca prevenir la configuración de infracciones y sanciones ante la Unidad de Inteligencia Financiera – UIF del Perú.'
    },
    {
      icono: 'search',
      titulo: 'Asesoría en perfil de cumplimiento – D. Leg N° 1535',
      descripcion: 'Ayudamos a las empresas a cumplir con las normativas, reducir sanciones y mejorar su reputación.'
    }
  ];

  // Servicios adicionales (visibles al expandir)
  serviciosAdicionales: Servicio[] = [
    {
      icono: 'gavel',
      titulo: 'Asesoría Legal Tributaria',
      descripcion: 'Ofrecemos asesoría especializada en materia tributaria para evitar contingencias fiscales y optimizar la carga impositiva.'
    },
    {
      icono: 'business',
      titulo: 'Consultoría en Comercio Exterior',
      descripcion: 'Brindamos apoyo en operaciones de importación y exportación, cumpliendo con la normativa aduanera vigente.'
    },
    {
      icono: 'security',
      titulo: 'Implementación de Programas de Integridad',
      descripcion: 'Ayudamos a establecer mecanismos de prevención y detección de actos de corrupción en su organización.'
    }
  ];

  toggleExpansion() {
    this.expandido = !this.expandido;
  }
}
