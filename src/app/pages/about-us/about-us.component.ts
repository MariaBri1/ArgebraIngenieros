import { AfterViewInit, Component, ElementRef, ViewChild, type OnInit } from '@angular/core';
import { DomSanitizer, type SafeResourceUrl } from '@angular/platform-browser';
import { type CarouselItem } from 'src/app/shared/components/interfaces/carousel.interface';
import { type SimpleCarouselItem } from 'src/app/shared/components/interfaces/simplecarousel.interface';
import { type Review } from 'src/app/shared/components/reviws/reviws.component';

declare var YT: any; // Declaración para el API de YouTube

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('videoFrame') videoFrame: ElementRef = {} as ElementRef;

  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any; // Instancia del reproductor de YouTube

  carouselItems1: CarouselItem[] = []
  carouselItems2: SimpleCarouselItem[] = []

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }

  ngAfterViewInit() {
    // Cargar API de YouTube
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      (window as any).onYouTubeIframeAPIReady = () => {
        this.initPlayer();
      };
    } else {
      this.initPlayer();
    }
  }

  initPlayer() {
    if (this.videoFrame && this.videoFrame.nativeElement) {
      this.player = new YT.Player(this.videoFrame.nativeElement, {
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    }
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    // Si el video se pausa, inmediatamente reproducirlo de nuevo
    if (event.data === YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
  }

  updateVideoUrl(): void {
    const baseUrl = 'https://www.youtube.com/embed/cC_zjR1TtKM';
    const params = new URLSearchParams({
      autoplay: '1',      // Iniciar reproducción automática
      mute: this.isMuted ? '1' : '0',
      controls: '0',      // Ocultar controles de reproducción
      loop: '1',          // Reproducción en bucle
      playlist: 'cC_zjR1TtKM',
      modestbranding: '1',
      rel: '0',           // No mostrar videos relacionados
      showinfo: '0',      // Ocultar información del video
      iv_load_policy: '3', // Ocultar anotaciones
      disablekb: '1',     // Deshabilitar controles del teclado
      fs: '0',            // Deshabilitar pantalla completa
      enablejsapi: '1',   // Habilitar API de JavaScript
      origin: window.location.origin
    });

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseUrl}?${params.toString()}`);
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.updateVideoUrl();

    // Si el player ya está inicializado, actualizar el estado de silencio
    if (this.player) {
      this.isMuted ? this.player.mute() : this.player.unMute();
    }
  }

  // Método para prevenir pausa por clic
  preventPause(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.player) {
      // Si está pausado, volver a reproducir
      if (this.player.getPlayerState() === YT.PlayerState.PAUSED) {
        this.player.playVideo();
      }
    }
  }

reviewList: Review[] = [
  {
    image: '/assets/clientes/p.webp',
    time: 'Lima',
    stars: 5,
    text: 'Excelente servicio y atención personalizada. El equipo de Más Que Vacaciones se encargó de cada detalle de mi viaje, asegurándose de que todo saliera excelente 😁 realmente los recomiendo',
    name: 'Pamela Goicochea'
  },
  {
    image: '/assets/clientes/bra.png',
    time: 'Arequipa',
    stars: 5,
    text: 'Muy buena atención durante la compra de pasajes y seguro de viajes.',
    name: 'Braulio Rugel Robles'
  },
  {
    image: '/assets/clientes/deya.png',
    time: 'Lima',
    stars: 5,
    text: 'Buenísima atención tanto en la coordinación para los paquetes de turismo y en los tours, los guías son muy atentos.',
    name: 'Deyanira Goicochea'
  },
  {
    image: '/assets/clientes/vic.png',
    time: 'Arequipa',
    stars: 5,
    text: 'Tomamos servíos de turismo en Arequipa y fue lo máximo, lo recomiendo.',
    name: 'Victor Manuel Alvarez'
  },
  {
    image: '/assets/clientes/ale.png',
    time: 'Lima',
    stars: 5,
    text: 'La guía muy bien preparada super atenta. La movilidad cómoda y limpia. Muy buen conductor.',
    name: 'Alexandra de Bautista'
  },
  {
    image: '/assets/clientes/osc.png',
    time: 'Sao Paulo',
    stars: 5,
    text: 'Bonita experiencia impresionado con lo bello que es Sao Paulo',
    name: 'Oscar Eduardo Aragon'
  },
  {
    image: '/assets/clientes/jor.png',
    time: 'Lima',
    stars: 5,
    text: 'La agencia nos ha preparado todo muy bien y nos ha ayudado a resolver las incidencias que nos han ocurrido. Sin duda la recomiendo para cualquiera que quiera visitar Perú.',
    name: 'Jorge Gonzalez'
  },
  {
    image: '/assets/clientes/cam.png',
    time: 'Arequipa',
    stars: 5,
    text: 'Compré dos tours en Más que vacaciones: 1- para el colca y otra para las salinas, ambas en Arequipa. Mi proceso fue súper sencillo, un amigo me recomendó, luego hablé con Mónica que me guió con los precios y comunicaciones, de forma clara y rápida. Lo acordado en hora de salida, informaciones adicionales a tomar en cuenta. En los dos tours pasé súper bien y seguro solo recomiendo!',
    name: 'Camila Diles'
  },
  {
    image: '/assets/clientes/pab.png',
    time: 'Lima',
    stars: 5,
    text: 'Es la agencia que se encarga de mis gestiones laborales y familiares, con la cual se encuentro muy satisfecho por las atenciones apropiadas, la paciencia para atenderme y ayudarme cuando fue necesario, la recomiendo.',
    name: 'Pablo Carhuachin'
  },
  {
    image: '/assets/clientes/a.png',
    time: 'Lima',
    stars: 5,
    text: 'Excelente servicio. Son super atentos, toman en cuenta todos los detalles y hacen que realmente disfrute de las vacaciones. Recomiendo muchísimo los servicios de esta agencia.',
    name: 'Ahyde Ruíz'
  },
  {
    image: '/assets/clientes/i.png',
    time: 'Lima',
    stars: 5,
    text: 'Viajamos a Peru con la agencia más que vacaciones con unas espectativas muy altas pero que se han visto superadas con creces. Una muy buena organización y siempre a pendiente de todo y de cómo estás. Viajar a Peru nos ha sorprendido su comida exquisita y que vamos a decir de sus paisajes, sus pueblos, su gente maravillosa y amable, es decir todo en general ha sido expectacular que recomiendo viajar al menos una vez en la vida. Gracias Más que vacaciones por todo y hasta pronto',
    name: 'Idoia Rodriguez'
  },
  {
    image: '/assets/clientes/erika.png',
    time: 'Arequipa',
    stars: 5,
    text: '100% Recomendado!!! total garantía te asesoran de principio a fin! me encanto su servicio brindado.',
    name: 'Erika Agurto'
  }

  // Puedes agregar más reseñas aquí
];

galleryItems: Array<{ image: string, title: string, description: string }> = [] // Declara galleryItems aquí

  ngOnInit (): void {
    this.galleryItems = [
      {
        image: '/assets/images/i-service.jpg',
        title: 'Servicio Integral',
        description: 'Nos enorgullece proporcionar una solución que cubre todos los aspectos de tus requerimientos'
      },
      {
        image: '/assets/images/our-essence.webp',
        title: 'Atención personalizada',
        description: 'Adaptamos nuestros servicios para proporcionarte una experiencia única'
      },
      {
        image: '/assets/images/experience.jpg',
        title: 'Confianza de cliente',
        description: 'Tenemos 10 años cumpliendo sueños, brindando la confianza y seguridad que necesitas para viajar sin preocupaciones.'
      }
    ]
    this.carouselItems1= [
      { image: 'assets/logos/agil_peru_logo.png', title: 'Agil (Destinos Mundiales SAC)', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/continental_travel_logo.webp', title: 'Continental Travel SAC', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/mundo_representaciones.png', title: 'Mundo Representaciones', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/costa_icon.png', title: 'Costa Cruceros', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dynamics_Inkasiko.png', title: 'Dynamics Inkasiko', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/conexion_logo.png', title: 'Conexión', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/logo_eua.png', title: 'Euroamerican Assistance', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/posada_tumpis.png', title: 'Posada de los Tumpis', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/cumbaza_hoteles.png', title: 'Río Cumbaza Hotel', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/dm_logo.png', title: 'Dm Hoteles', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/costamar_logo.png', title: 'Costamar Travel Cruise & Tours S.A.C.', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/vcr_logo.png', title: 'VCR Representaciones', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/tambo_logo.png', title: 'Hoteles El Tambo Perú', description: 'Proveedor con 10 años de experiencia' },
      { image: 'assets/logos/ibero_logo.png', title: 'Iberostar Hotels & Resorts', description: 'Proveedor con 10 años de experiencia' },
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
