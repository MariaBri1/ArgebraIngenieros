import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var YT: any;

export interface PrivacyPolicy {
  title: string;
  description?: string;
  paragraphs?: string[];
  icon: string;
}

@Component({
  selector: 'app-privacy-policies',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, BannerComponent],
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.scss']
})
export class PrivacyPoliciesComponent {
  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any;

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }

  updateVideoUrl(): void {
    const baseUrl = 'https://www.youtube.com/embed/cKeWZiybRwo';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: this.isMuted ? '1' : '0',
      controls: '0',
      loop: '1',
      playlist: 'cKeWZiybRwo',
      modestbranding: '1',
      rel: '0',
      showinfo: '0',
      iv_load_policy: '3',
      disablekb: '1',
      fs: '0',
      enablejsapi: '1',
      origin: window.location.origin
    });

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}?${params.toString()}`);
  }

  preventPause(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.player && this.player.getPlayerState() === YT.PlayerState.PAUSED) {
      this.player.playVideo();
    }
  }

 policiesList = [
    {
      title: 'Política de Privacidad y Protección de Datos',
      paragraphs: [
        `En Argebra Ingenieros S.A.C., valoramos la confidencialidad y seguridad de la información de nuestros clientes, colaboradores y aliados. Esta política explica cómo gestionamos y protegemos los datos personales obtenidos a través de nuestros canales digitales, contratos o comunicaciones institucionales.`,
        `Canales de comunicación: correo electrónico corporativo, página web, llamadas, reuniones presenciales y redes profesionales. A través de estos medios podemos recopilar información necesaria para brindar nuestros servicios de ingeniería y construcción.`
      ],
      icon: 'fas fa-shield-alt'
    },
    {
      title: '1. Información que Recopilamos',
      paragraphs: [
        `• Datos de contacto: nombre, cargo, empresa, correo electrónico y teléfono.`,
        `• Información contractual: requerimientos técnicos, presupuestos, planos y especificaciones.`,
        `• Información de facturación y pagos.`,
        `• Información técnica o de acceso: dirección IP, navegador y cookies (solo para mejorar la experiencia de usuario en nuestra web).`
      ],
      icon: 'fas fa-database'
    },
    {
      title: '2. Uso de la Información',
      paragraphs: [
        `• Gestionar contratos y proyectos de ingeniería civil, eléctrica y mecánica.`,
        `• Comunicarnos con clientes, proveedores y entidades públicas.`,
        `• Garantizar el cumplimiento de normas de seguridad y calidad.`,
        `• Analizar y mejorar nuestros procesos internos.`,
        `• Cumplir obligaciones legales y normativas vigentes.`
      ],
      icon: 'fas fa-cogs'
    },
    {
      title: '3. Compartición de Datos',
      paragraphs: [
        `• Con entidades aliadas o contratistas que colaboran en la ejecución de proyectos, bajo acuerdos de confidencialidad.`,
        `• Con autoridades competentes cuando sea requerido por ley.`,
        `• No compartimos, vendemos ni cedemos datos a terceros sin consentimiento expreso.`
      ],
      icon: 'fas fa-share-alt'
    },
    {
      title: '4. Seguridad de la Información',
      paragraphs: [
        `• Implementamos medidas de seguridad física, digital y administrativa para proteger la información.`,
        `• Utilizamos servidores seguros y acceso restringido a personal autorizado.`,
        `• Realizamos auditorías periódicas del sistema de información.`,
        `• El incumplimiento interno conlleva sanciones y revisiones por el área de sistemas.`
      ],
      icon: 'fas fa-lock'
    },
    {
      title: '5. Derechos del Titular de los Datos',
      paragraphs: [
        `• Acceder, actualizar o eliminar su información personal.`,
        `• Solicitar la limitación del uso de sus datos.`,
        `• Presentar consultas o reclamos sobre el tratamiento de su información.`
      ],
      icon: 'fas fa-user-check'
    },
    {
      title: '6. Contacto',
      paragraphs: [
        `• Para cualquier consulta o ejercicio de derechos, puede escribirnos a: contacto@argebra.com.pe`
      ],
      icon: 'fas fa-envelope'
    }
  ];

  openStates: boolean[] = this.policiesList.map(() => false);

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }
}



