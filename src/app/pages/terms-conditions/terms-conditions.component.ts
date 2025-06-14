import { NgIf, NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var YT: any;

export interface TermsConditions {
  title: string;
  description?: string;
  paragraphs?: string[];
  icon: string;
}

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, BannerComponent],
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {

  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any;
  audioPaused = true;

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

  termsList = [
    {
      title: 'Sobre los Precios:',
      description: 'Todas las tarifas están expresadas en dólares norteamericanos y pueden consultar el tipo de cambio en soles, En los servicios no está incluido el IGV del 18% aplicable para peruanos y extranjeros residentes en el Perú (exonerado para extranjeros). Si requiere una factura de servicios adquiridos a desarrollarse en Perú se tendrá que añadir el 18%.',
      icon: 'fas fa-globe'
    },
    {
      title: 'Depósitos y reservas:',
      icon: 'fas fa-user-shield',
      paragraphs: [
        `Para confirmar la reserva, debemos haber recibido su pago por los servicios contratados o el depósito de garantía. La reserva estará confirmada cuando uno de nuestros asesores le informe a través de un e-mail y/o WhatsApp el estatus de confirmada.`,
        `Los pagos o depósitos de garantía deben ser hechos a través de nuestras cuentas bancarias. Si va a realizar pagos desde el extranjero, considere que el cliente asume el costo de las comisiones que el banco pueda cobrar aquí en Perú por la transacción.`,
        `Pagos con tarjeta de crédito se realizarán mediante un link de pago, el cual tiene un recargo del 5 % + IGV sobre el total del costo.`,
        `Los precios establecidos al tiempo de la reserva incluyen solo los servicios contratados por el cliente y descritos en los vouchers y tickets entregados.`,
        `Los impuestos, tasas, tributos u otros cargos aplicados en destino pueden variar sin previo aviso. Su pago e información sobre ellos es responsabilidad del cliente.`,
        `Es responsabilidad del cliente presentar en los servicios contratados una tarjeta de crédito vigente del titular para cubrir garantías. Estas condiciones pueden variar según cada proveedor.`,
        `MQV no es el proveedor directo de los servicios turísticos y actúa como intermediario entre el cliente y los proveedores. El contrato final es celebrado entre el cliente y el proveedor del servicio turístico.`
      ]
    },
    {
      title: 'Sobre las Anulaciones, Cambios y Devoluciones:',
      icon: 'fas fa-user-shield',
      paragraphs: [
        `Todo cambio o anulación está sujeto a condiciones y restricciones que dependen de su ticket aéreo y de cada hotel o proveedor de servicios. En consecuencia, podrán existir devoluciones parciales, totales o en algunos casos no existir devolución de los importes pagados.`,
        `El reclamo o reembolso respecto de otro servicio turístico queda sujeto a las modalidades, condiciones y procedimientos de los distintos prestadores de los servicios, debiendo presentarse dentro de los 7 días de finalizado el viaje, por escrito, acompañando la documentación sustentatoria y firmado por el Cliente. Pasado este término no procede el trámite.`,
        `En ningún caso, MQV costeará los eventuales costos y/o cargos y/o impuestos y/o gravámenes derivados de las transferencias bancarias o similares que se utilicen para realizar cualquier tipo de devolución y/o reembolso y/o reintegro en caso de proceder alguno. A excepción de los servicios que así lo indiquen explícitamente. Tratándose de boletos aéreos se aplicará las políticas y directivas de cada aerolínea.`,
        `En los casos de servicios de vuelos regulares, las condiciones son impuestas por los operadores con quien el Cliente deberá entenderse directamente y reclamar en su caso por cualquier inconveniente o perjuicio sufrido como consecuencia del viaje. MQV no tiene control sobre estas condiciones y ofrecerá todo apoyo a su alcance para llevarlos a cabo.`,
        `Las respuestas a las solicitudes de devolución están sujetas a los plazos de cada proveedor u hotel.`,
        `Es deber del cliente haberse informado acerca de las condiciones de anulaciones, cambios y devoluciones al momento de realizar la reserva directamente con su canal de venta.`,
        `Para solicitar la anulación y devolución de los servicios contratados, el cliente deberá contactar directamente a su canal de venta correspondiente ya sea por correo o al siguiente número de teléfono: +51 932244747`
      ]
    },
    {
      title: 'Tarjetas de Asistencia a Viajeros:',
      icon: 'fas fa-shield-alt',
      description: 'MQV le recomienda que viaje siempre convenientemente asegurado. En ciertos casos, le ofrecemos la posibilidad de añadir un seguro a su viaje en ciertos destinos. Adicionalmente, los agentes podrán brindarle información, siendo su decisión y riesgo tomar y adquirir el seguro que lo cubra de eventualidades. Tenga en cuenta que los seguros no permiten cancelaciones, por tanto no son reembolsables. A menos que su visado haya sido denegado, en cuyo caso debe contactarse con nosotros para su devolución previa aplicación de la penalidad correspondiente de acuerdo a las políticas del prestador del servicio y antes de haber dado inicio a la fecha de viaje.',
    },
    {
      title: 'Sobre las Anulaciones, Cambios y Devoluciones:',
      icon: 'fas fa-user-shield',
      paragraphs: [
        `Todo cambio o anulación está sujeto a condiciones y restricciones que dependen de su ticket aéreo y de cada hotel o proveedor de servicios...`,
        `El reclamo o reembolso respecto de otro servicio turístico queda sujeto a las modalidades, condiciones y procedimientos...`,
        `En ningún caso, MQV costeará los eventuales costos y/o cargos y/o impuestos...`,
        `En los casos de servicios de vuelos regulares, las condiciones son impuestas por los operadores...`,
        `Las respuestas a las solicitudes de devolución están sujetas a los plazos de cada proveedor u hotel.`,
        `Es deber del cliente haberse informado acerca de las condiciones de anulaciones, cambios y devoluciones...`,
        `Para solicitar la anulación y devolución de los servicios contratados, el cliente deberá contactar directamente a su canal de venta...`
      ]
    },
    {
      title: 'Equipaje',
      icon: 'fas fa-suitcase-rolling',
      paragraphs: [
        `MQV no se responsabiliza por el deterioro, extravío, hurto, robo o pérdida del equipaje ni demás objetos personales del Cliente...`,
        `Se recomienda contratar un seguro de viaje.`,
        `Verifique las regulaciones de la aerolínea, ya que la tarifa no siempre incluye franquicia de equipaje.`
      ]
    },
    {
      title: 'Asientos',
      icon: 'fas fa-chair',
      paragraphs: [
        `MQV no se responsabiliza por la asignación de asientos en vuelos con tarifas básicas.`,
        `Las aerolíneas asignan asientos aleatoriamente y sin derecho a reclamo.`,
        `La elección anticipada de asientos puede tener un costo adicional.`
      ]
    },
    {
      title: 'Hospedaje',
      icon: 'fas fa-hotel',
      paragraphs: [
        `MQV no garantiza el tipo específico de habitación (twin, queen, matrimonial).`,
        `La solicitud se realiza, pero queda sujeta a disponibilidad del hotel.`
      ]
    },
    {
      title: 'Responsabilidades',
      icon: 'fas fa-briefcase',
      paragraphs: [
        `MQV no es responsable por pérdidas, suspensiones o modificaciones de servicios causados por fuerza mayor, clima u otras causas externas.`,
        `MQV no es responsable por la falta de documentos necesarios (visa, pasaporte, vacunas, etc.) del cliente.`,
        `Solo se garantiza lo especificado en los vouchers y tickets emitidos.`,
        `Los gastos adicionales por servicios no reservados a través de MQV son responsabilidad del pasajero.`,
        `El cliente debe portar todos los documentos y entregarlos a los prestadores de servicios.`,
        `MQV actúa como intermediario y no es responsable por deficiencias de los proveedores.`,
        `Es responsabilidad del pasajero llegar puntualmente al aeropuerto o a los puntos de encuentro para traslados/excursiones.`
      ]
    }

  ];

  openStates: boolean[] = this.termsList.map(() => false);

  toggle(index: number): void {
    this.openStates[index] = !this.openStates[index];
  }

   onAudioEnded() {
    this.audioPaused = true;
  }
  onAudioPaused() {
    this.audioPaused = true;
  }
  onAudioPlayed() {
    this.audioPaused = false;
  }
}
