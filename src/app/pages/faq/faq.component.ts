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
    const baseUrl = 'https://www.youtube.com/embed/cC_zjR1TtKM';
    const params = new URLSearchParams({
      autoplay: '1',
      mute: this.isMuted ? '1' : '0',
      controls: '0',
      loop: '1',
      playlist: 'cC_zjR1TtKM',
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
    title: "¿Cuáles son los medios de pago?",
    paragraphs: [
      "Pago por transferencia bancaria.",
      "Pago por Yape.",
      "Pago por Plin.",
      "Pago por Tarjeta de crédito.",
      "Pago por Western Union."
    ],
    icon: "fas fa-credit-card"
  },
  {
    title: "¿Qué no forma parte del importe a reembolsar?",
    paragraphs: [
      "Por norma general, el importe del reembolso no incluye la tasa de servicio.",
      "Las líneas aéreas pueden no reembolsar el importe cobrado por hacer modificaciones en la reserva del vuelo.",
      "Por ejemplo, si se cambian la fecha o el destino.",
      "También aplica si se modifican los datos personales del pasajero."
    ],
    icon: "fas fa-undo"
  },
  {
    title: "¿Tiene servicio de trámite de visado?",
    paragraphs: [
      "Sí, te asesoramos para aplicar a las visas de países que lo requieran.",
      "Conocemos los trámites relativos a cada embajada y los acompañamos hasta que cierren dicho trámite."
    ],
    icon: "fas fa-passport"
  },
  {
    title: "¿Me ayudan con el Check-in?",
    paragraphs: [
      "Sí. Nosotros generamos el Check-in como parte de nuestro servicio.",
      "Dentro de las horas establecidas, usted recibirá sus pases de abordar correspondientes.",
      "Tenga en cuenta que su asignación de asientos (si la tarifa del boleto lo permite) dentro del avión sólo puede decidirse en el momento del check-in.",
      "Si no está conforme con la selección de asientos, será necesario acercarse al counter de la aerolínea con suficiente tiempo de anticipación y solicitar puedan ayudarle con el cambio.",
      "Puede acumular millas de viajero frecuente. Para ello, deberá informarnos y brindarnos su número de pasajero frecuente."
    ],
    icon: "fas fa-plane-arrival"
  },
  {
    title: "¿Puedo viajar con DNI o Pasaporte?",
    paragraphs: [
      "En viajes nacionales o hacia países miembros de la Comunidad Andina (Argentina, Brasil, Bolivia, Colombia, Chile, Ecuador, Uruguay, Paraguay, Perú y Venezuela) es obligatorio presentar DNI vigente al momento del check-in.",
      "Por lo cual no se necesita presentar pasaporte.",
      "Preste atención a los documentos que pueden ser de utilidad dependiendo del tipo de pasajero:",
      "• Mayores de 18 años: obligatorio presentar DNI.",
      "• Menores de edad: deben presentar su partida de nacimiento, DNI y la autorización de viaje firmada por uno de los padres y legalizada por el notario público (Permiso Notarial).",
      "• Viajes internacionales:",
      "  - Mayores de 18 años: pasaporte con validez mínima de seis meses (o según el país), el DNI y Visa (en caso requiera).",
      "  - Menores de edad: partida de nacimiento, pasaporte, DNI y Visa (de ser necesario), además de la autorización de viaje firmada por el padre que no acompañe al menor.",
      "  - Menores viajando sin padres: autorización de viaje firmada por ambos padres y legalizada por un Notario Público.",
      "    Si viaja con uno de los padres, la autorización debe ser firmada por el padre que no viaje."
    ],
    icon: "fas fa-id-card"
  },
  {
    title: "¿Puedo viajar embarazada?",
    paragraphs: [
      "Todos los tipos de compañías aéreas permiten viajar a las mujeres embarazadas.",
      "Sin embargo, existen diferencias de acuerdo al tiempo de embarazo.",
      "Recuerde: toda mujer embarazada debe consultar al médico antes del vuelo.",
      "Después del 7mo mes de gestación, la embarazada necesita un certificado médico permitiendo su viaje.",
      "Es importante informar al médico sobre antecedentes como aborto previo, sangrados, diabetes, presión alta o parto prematuro.",
      "La pasajera embarazada no puede olvidar entre sus documentos personales el certificado médico.",
      "En el aeropuerto se le solicitará firmar unos términos de responsabilidad de la pasajera embarazada.",
      "En el noveno mes de embarazo se exige que la pasajera viaje acompañada de un médico.",
      "Durante el vuelo, la gestante debe evitar permanecer en la misma posición por largo tiempo, hidratarse con frecuencia y llevar sus medicamentos necesarios.",
      "Cada compañía aérea tiene sus especificaciones y es indispensable avisar de la condición de embarazo durante la compra de pasajes aéreos.",
      "Esta información puede variar."
    ],
    icon: "fas fa-baby"
  },
  {
    title: "¿Puede la aerolínea modificar mi vuelo o cancelarlo?",
    paragraphs: [
      "Sí. Si su vuelo ha sido reprogramado por más de 3 horas de diferencia con su vuelo inicial, o cancelado por la compañía aérea, usted tiene derecho a un reembolso por el viaje que no ha disfrutado.",
      "Sin embargo, recuerde que el reembolso únicamente se aplica a los servicios que no ha recibido.",
      "Por lo tanto, el importe final del reembolso que le pagará la aerolínea puede no coincidir con el importe total pagado por la reserva."
    ],
    icon: "fas fa-plane-slash"
  }
];


  openStates: boolean[] = this.faqs.map(() => false);

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }
}
