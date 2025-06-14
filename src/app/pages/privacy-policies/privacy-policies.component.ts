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
    const baseUrl = 'https://www.youtube.com/embed/6HccyI1aBQI';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: this.isMuted ? '1' : '0',
      controls: '0',
      loop: '1',
      playlist: '6HccyI1aBQI',
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
      title: 'Políticas de Privacidad y Seguridad de Protección de Datos',
      paragraphs: [
        `En Más Que Vacaciones EIRL, estamos comprometidos con salvaguardar la privacidad de nuestros clientes. Esta política describe cómo recopilamos, usamos, protegemos y compartimos tu información personal. Puede actualizarse con el tiempo, por lo que recomendamos revisarla frecuentemente en nuestra página web.`,
        `Canales de comunicación: Correo electrónico, WhatsApp, llamadas telefónicas, página web, redes sociales como Facebook, TikTok, Instagram, etc. Por estos canales solicitamos y recopilamos información.`
      ],
      icon: 'fas fa-shield-alt'
    },
    {
      title: '1. Información que Recopilamos',
      paragraphs: [
        `• Información de contacto: para cotizaciones y reservas se solicita nombre, correo, teléfono, documento, fecha de nacimiento, etc.`,
        `• Información de viaje: destinos, fechas, vuelos, hoteles, edad, género, preferencias.`,
        `• Información de pago: detalles de tarjeta u otros medios.`,
        `• Información técnica: IP, navegador, cookies para mejorar experiencia y seguridad.`,
        `• Información compartida sobre el viaje: opiniones, fotos, etiquetas, etc.`
      ],
      icon: 'fas fa-database'
    },
    {
      title: '2. Cómo Usamos tu Información',
      paragraphs: [
        `• Procesar reservas y brindarte servicios personalizados.`,
        `• Comunicarnos contigo con respecto a tu viaje, novedades, promociones y servicios.`,
        `• Mejora de nuestros servicios y personalización de experiencia.`,
        `• Análisis y estudios de mercado.`,
        `• Marketing: solicitamos permiso para usar fotos o videos, y no publicamos nada sin consentimiento.`
      ],
      icon: 'fas fa-cogs'
    },
    {
      title: '3. Compartir tu Información',
      paragraphs: [
        `• Con proveedores de servicios (hoteles, aerolíneas, etc.) para gestionar reservas y facturación.`,
        `• Con terceros que nos ayudan (pagos, marketing).`,
        `• Puede ser almacenada en nuestros sistemas.`,
        `• Opiniones publicadas en nuestro sitio se toman de fuentes públicas (Google, Facebook), mostrando solo datos no sensibles.`
      ],
      icon: 'fas fa-share-alt'
    },
    {
      title: '4. Seguridad de tu Información',
      paragraphs: [
        `• Implementamos medidas técnicas y administrativas para proteger tu información personal.`,
        `• Uso de cifrado y tecnologías para datos de pago.`,
        `• No vendemos ni cedemos datos sin tu consentimiento, salvo orden judicial.`,
        `• Nuestros proveedores también cumplen con leyes de protección de datos.`,
        `• Nos reservamos el derecho de modificar esta política en cualquier momento.`,
        `• Infracciones internas conllevan suspensión y auditorías por el área de TI.`
      ],
      icon: 'fas fa-lock'
    },
    {
      title: '5. Tus Derechos',
      paragraphs: [
        `• Puedes solicitarnos la eliminación de tu información personal.`
      ],
      icon: 'fas fa-user-check'
    },
    {
      title: '6. Contacto',
      paragraphs: [
        `• Si tienes dudas sobre esta política, contáctanos a: informes@masquevacaciones.com.pe`
      ],
      icon: 'fas fa-envelope'
    }
  ];


  openStates: boolean[] = this.policiesList.map(() => false);

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }
}
