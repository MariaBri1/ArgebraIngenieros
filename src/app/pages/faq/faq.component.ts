import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


declare var YT: any;

export interface Faq {
  title: string;
  description?: string;
  paragraphs?: string[];
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  imports: [NgIf, NgFor, NgClass, BannerComponent, AccordionComponent]
})
export class FaqComponent {

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


  readonly faqs: Faq[] = [
  {
    title: "¿Cuáles son los medios de pago aceptados?",
    paragraphs: [
      "Transferencia bancaria a cuentas corporativas.",
      "Depósito en cuenta a nombre de Argebra Ingenieros S.A.C.",
      "Pago mediante cheque de gerencia.",
      "Pagos electrónicos (previa coordinación con el área administrativa)."
    ],
    icon: "fas fa-credit-card"
  },
  {
    title: "¿Qué servicios ofrece Argebra Ingenieros S.A.C.?",
    paragraphs: [
      "Diseño, ejecución y supervisión de obras civiles, eléctricas y sanitarias.",
      "Consultoría técnica y gestión de proyectos de infraestructura.",
      "Mantenimiento preventivo y correctivo de instalaciones industriales y comerciales.",
      "Elaboración de expedientes técnicos y presupuestos detallados."
    ],
    icon: "fas fa-hard-hat"
  },
  {
    title: "¿Trabajan con entidades públicas o privadas?",
    paragraphs: [
      "Sí, desarrollamos proyectos tanto para el sector público como privado.",
      "Participamos en procesos de licitación, adjudicación directa y contrataciones privadas.",
      "Cumplimos con todos los requisitos legales y normativos del Estado Peruano."
    ],
    icon: "fas fa-building"
  },
  {
    title: "¿Cuentan con certificaciones o acreditaciones?",
    paragraphs: [
      "Sí, contamos con registros y certificaciones que respaldan nuestra experiencia técnica.",
      "Cumplimos con las normas de seguridad y salud ocupacional (SST).",
      "Nuestros procesos se alinean a estándares ISO aplicables a la ingeniería y construcción."
    ],
    icon: "fas fa-certificate"
  },
  {
    title: "¿Cómo garantizan la calidad de los proyectos?",
    paragraphs: [
      "Contamos con un equipo de ingenieros especializados en control de calidad.",
      "Supervisamos cada etapa del proceso constructivo con protocolos técnicos certificados.",
      "Utilizamos materiales de primera calidad y proveedores verificados.",
      "Realizamos auditorías técnicas y entregas documentadas al cliente."
    ],
    icon: "fas fa-check-circle"
  },
  {
    title: "¿Qué medidas de seguridad aplican en obra?",
    paragraphs: [
      "Implementamos planes de seguridad y salud ocupacional en todas nuestras obras.",
      "Capacitamos continuamente a nuestro personal en prevención de riesgos.",
      "Cumplimos las normas del Ministerio de Trabajo y del Reglamento Nacional de Seguridad en Construcción.",
      "Contamos con supervisión técnica permanente y control de equipos de protección personal (EPP)."
    ],
    icon: "fas fa-helmet-safety"
  },
  {
    title: "¿Cómo puedo solicitar una cotización o propuesta técnica?",
    paragraphs: [
      "Puedes comunicarte con nosotros a través del correo corporativo o formulario web.",
      "Nuestro equipo técnico evaluará tu requerimiento y preparará una propuesta adaptada a tus necesidades.",
      "En caso de obras mayores, se coordina una visita técnica sin costo adicional."
    ],
    icon: "fas fa-envelope-open-text"
  }
];



  openStates: boolean[] = this.faqs.map(() => false);

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }
}
