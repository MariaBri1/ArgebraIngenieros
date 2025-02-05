import { Component, inject, type OnInit } from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { type CarouselItem } from 'src/app/shared/components/interfaces/carousel.interface';
import { type SimpleCarouselItem } from 'src/app/shared/components/interfaces/simplecarousel.interface';
import { ReviwsComponent, type Review } from 'src/app/shared/components/reviws/reviws.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  private readonly sanitizer = inject(DomSanitizer)
  videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/nWk6Y5h4Ovo?autoplay=1&mute=0&controls=0&loop=1&playlist=nWk6Y5h4Ovo&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3'
  )

  carouselItems1: CarouselItem[] = []
  carouselItems2: SimpleCarouselItem[] = []
  carouselItems3: ReviwsComponent[]=[]



reviewList: Review[] = [
  {
    image: '/assets/clientes/cliente.webp',
    time: '2 días atrás',
    stars: 5,
    text: 'La agencia nos diseñó un itinerario a medida que se ajustaba perfectamente a nuestros gustos.La elección de los  hoteles fue excelente, muy cómodos y bien ubicados',
    name: 'Carlos Pérez'
  },
  {
    image: '/assets/clientes/juana.jpg',
    time: '3 días atrás',
    stars: 5,
    text: 'Todo estaba perfectamente organizado, desde los traslados hasta las actividades. La agencia nos proporcionó toda la  información necesaria para disfrutar  al máximo nuestro viaje.',
    name: 'Juana Flores'
  },
  {
    image: '/assets/clientes/predeterminada.webp',
    time: '1 semana atrás',
    stars: 5,
    text: 'El precio del paquete turístico fue muy competitivo y el servicio fue de primera calidad.',
    name: 'Jose fernandez'
  },
  {
    image: '/assets/clientes/mario.jpg',
    time: '3 semanas atrás',
    stars: 5,
    text: 'Excelente servicio, muy recomendado.',
    name: 'Mario Rojas'
  }

  // Puedes agregar más reseñas aquí
];

galleryItems: Array<{ image: string, title: string, description: string }> = [] // Declara galleryItems aquí

  ngOnInit (): void {
    this.galleryItems = [
      {
        image: '/assets/images/our-essence.webp',
        title: 'Servicio Integral',
        description: 'Nos enorgullece proporcionar una solución que cubre todos los aspectos de tus requerimientos'
      },
      {
        image: '/assets/images/our-essence.webp',
        title: 'Atención personalizada',
        description: 'Adaptamos nuestros servicios para proporcionarte una experiencia única'
      },
      {
        image: '/assets/images/our-essence.webp',
        title: 'Soluciones holísticas',
        description: 'Abordamos cada desafío de manera integral, considerando todos los aspectos y variables involucradas'
      }
    ]
    this.carouselItems1 = [
      { image: 'assets/logos/agil_peru_logo.png', title: 'Agil (Destinos Mundiales SAC)', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/continental_travel_logo.jpg', title: 'Continental Travel SAC', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/mundo_representaciones.png', title: 'Mundo Representaciones', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/logo_dm.png', title: 'DM Hoteles', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dynamics_Inkasiko.png', title: 'Dynamics Inkasiko', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/conexion_logo.png', title: 'Conexión', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/logo_eua.png', title: 'Euroamerican Assistance', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/posada_tumpis.png', title: 'Posada de los Tumpis', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/cumbaza_hoteles.png', title: 'Río Cumbaza Hotel', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/domiruth_logo.png', title: 'DOMIRUTH TRAVEL SERVICE', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/costamar_logo.png', title: 'Costamar Travel Cruise & Tours S.A.C.', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/vcr_logo.png', title: 'VCR Representaciones', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/tambo_logo.png', title: 'Hoteles El Tambo Perú', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/union_logo.png', title: 'Hotel Union Cusco', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/colonial_logo.png', title: 'Colonial Tours SRL', description: 'Proveedor con 10 años de experiencia' }
    ]
    this.carouselItems2 = [
      { image: 'assets/logos/respald-icons/protecte-icon.webp', title: 'Protegeme Turismo Responsable' },
      { image: 'assets/logos/respald-icons/prom_p-icon.png', title: 'PromPerú' },
      { image: 'assets/logos/respald-icons/min_c-icon.png', title: 'Mincetur' },
      { image: 'assets/logos/respald-icons/agency_r-icon.png', title: 'Agencia de Viajes y Turismo Registrada' },
      { image: 'assets/logos/respald-icons/camera-comercy-icon.png', title: 'CCL Cámara de Comercio de Lima' },
      { image: 'assets/logos/respald-icons/ytu-icon.webp', title: 'Y tú qué planes' }
    ]

  }


}
