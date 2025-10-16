import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CarouselItem } from 'src/app/shared/components/interfaces/carousel.interface';
import { SimpleCarouselItem } from 'src/app/shared/components/interfaces/simplecarousel.interface';
import { Review } from 'src/app/shared/components/reviws/reviws.component';

declare var YT: any; // Declaración para el API de YouTube

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  @ViewChild('videoFrame') videoFrame!: ElementRef;
  @ViewChild('historyContent') historyContent!: ElementRef;
  @ViewChild('esenciaContent') esenciaContent!: ElementRef;
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;


  audioPaused = true;
  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any;

  carouselItems1: CarouselItem[] = [];
  carouselItems2: SimpleCarouselItem[] = [];
  carouselItems3: SimpleCarouselItem[] = [];
  carouselItems4: SimpleCarouselItem[] = [];
  reviewList: Review[] = [];
  galleryItems: Array<{ image: string, title: string, description: string }> = [];

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }


  imagenes: string[] = [
    'assets/images/4.jpeg',
    'assets/images/2.jpeg',
    'assets/images/3.jpeg'
  ];

  currentIndex = 0;
  hover = false;

  get currentImage(): string {
    return this.hover
      ? this.imagenes[(this.currentIndex + 1) % this.imagenes.length]
      : this.imagenes[this.currentIndex];
  }

  onHover() {
    this.hover = true;
  }

  onLeave() {
    this.hover = false;
  }

  onClick() {
    this.currentIndex = (this.currentIndex + 1) % this.imagenes.length;
  }

  ngOnInit(): void {
    this.reviewList = [
      {
        image: '/assets/images/ingeniero1.jpg',
        time: 'Lima',
        stars: 5,
        text: 'Excelente atención y acompañamiento técnico. El equipo de Argebra Ingenieros mostró gran profesionalismo y cumplimiento en cada etapa del proyecto.',
        name: 'Walter Huamantumba'
      },
      {
        image: '/assets/images/ingeniero2.jpg',
        time: 'Callao',
        stars: 5,
        text: 'Muy buena gestión y soporte en la ejecución de obras civiles. Cumplieron los plazos establecidos sin inconvenientes.',
        name: 'Cecilia Misari'
      },
      {
        image: '/assets/images/ingeniero3.jpg',
        time: 'Lima',
        stars: 5,
        text: 'Excelente servicio en mantenimiento eléctrico e instalaciones industriales. Equipo serio y responsable.',
        name: 'Sharela Hacha'
      },
      {
        image: '/assets/images/ingeniero1.jpg',
        time: 'Arequipa',
        stars: 5,
        text: 'Destaco la calidad técnica y la buena comunicación durante todo el proyecto. Muy recomendados.',
        name: 'Jennifer Julca'
      }
    ];

    this.galleryItems = [
      {
        image: '/assets/images/ingeniero1.jpg',
        title: 'Compromiso y Precisión',
        description: 'Nuestro equipo garantiza soluciones técnicas seguras, eficientes y sostenibles, cumpliendo los más altos estándares de calidad.'
      },
      {
        image: '/assets/images/ingeniero2.jpg',
        title: 'Proyectos con Valor',
        description: 'Nos enfocamos en brindar resultados que generen impacto positivo en cada obra, impulsando el desarrollo de nuestros clientes.'
      },
      {
        image: '/assets/images/ingeniero3.jpg',
        title: 'Innovación y Eficiencia',
        description: 'Aplicamos tecnología de vanguardia y metodologías modernas para optimizar procesos, reducir costos y asegurar la calidad en cada proyecto.'
      }
    ];

    this.carouselItems1 = [
      { image: 'assets/logos/aerolineas/latam_logo.png', title: 'Cementos Pacasmayo', description: 'Proveedor de materiales de construcción y concreto' },
      { image: 'assets/logos/aerolineas/copa_logo.png', title: 'Ferreyros S.A.', description: 'Distribuidor de maquinaria pesada y equipos Caterpillar' },
      { image: 'assets/logos/aerolineas/sky_logo.png', title: 'Sika Perú', description: 'Proveedor de productos químicos para la construcción' },
      { image: 'assets/logos/aerolineas/american_airlines_logo.png', title: 'Unacem S.A.A.', description: 'Fabricante de cemento y soluciones estructurales' },
      { image: 'assets/logos/aerolineas/delta_logo.png', title: 'Graña y Montero (Aenza)', description: 'Empresa de ingeniería y construcción aliada en proyectos integrales' },
      { image: 'assets/logos/aerolineas/starperu_logo.png', title: 'Mota-Engil Perú', description: 'Socio en obras de infraestructura y servicios' },
      { image: 'assets/logos/aerolineas/klm_logo.png', title: 'DP World Callao', description: 'Aliado en logística y transporte portuario' },


      { image: 'assets/logos/costa_icon.png', title: 'Colegio de Arquitectos del Perú', description: 'Institución aliada en el desarrollo y certificación de proyectos arquitectónicos' },
      { image: 'assets/logos/dynamics_Inkasiko.png', title: 'Arup', description: 'Consultora internacional en diseño y planificación urbana' },
      { image: 'assets/logos/logo_eua.png', title: 'Gensler', description: 'Estudio global de arquitectura y diseño colaborativo' },
      { image: 'assets/logos/posada_tumpis.png', title: 'AECOM', description: 'Socio en ingeniería, gestión de proyectos e infraestructura sostenible' },
      { image: 'assets/logos/cumbaza_hoteles.png', title: 'Peruvian Green Building Council', description: 'Aliado en la promoción de construcciones sostenibles y certificación LEED' },

    ];

    this.carouselItems2 = [
      { image: 'assets/logos/respald-icons/prom_p-icon.png', title: 'Ministerio de Energía y Minas (MINEM)' },
      { image: 'assets/logos/respald-icons/min_c-icon.png', title: 'Organismo Supervisor de las Contrataciones del Estado (OSCE)' },
      { image: 'assets/logos/respald-icons/agency_r-icon.png', title: 'Instituto Nacional de Defensa Civil (INDECI)' },
      { image: 'assets/logos/respald-icons/ytu-icon.webp', title: 'Servicio Nacional de Certificación Ambiental (SENACE)' },
      { image: 'assets/logos/respald-icons/marca_Peru-icon.png', title: 'Cámara Peruana de la Construcción (CAPECO)' },

    ];


    this.carouselItems3 = [
      { image: 'assets/logos/respald-icons/protecte-icon.webp', title: 'Cámara Peruana de la Construcción (CAPECO)' },

    ];

    this.carouselItems4 = [
      { image: 'assets/images/1.png', title: '' }
    ];
  }

  ngAfterViewInit(): void {
    // Configurar el reproductor de YouTube
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


    this.setupAnimations();

    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play().catch(() => {
      });
    }
  }

  initPlayer(): void {
    if (this.videoFrame && this.videoFrame.nativeElement) {
      this.player = new YT.Player(this.videoFrame.nativeElement, {
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    }
  }

  setupAnimations(): void {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('part1')) {
            entry.target.classList.add('animate-slideInLeft');
          } else if (entry.target.classList.contains('part2')) {
            entry.target.classList.add('animate-slideInRight');
          } else if (entry.target.classList.contains('card-item')) {
            entry.target.classList.add('is-visible');
          }
        }
      });
    }, observerOptions);

    // Observar los elementos que necesitan animación
    const part1 = this.historyContent?.nativeElement.querySelector('.part1');
    const part2 = this.historyContent?.nativeElement.querySelector('.part2');
    const cardItems = this.esenciaContent?.nativeElement.querySelectorAll('.card-item');

    if (part1) observer.observe(part1);
    if (part2) observer.observe(part2);
    if (cardItems) {
      cardItems.forEach((card: Element) => observer.observe(card));
    }
  }

  onPlayerReady(event: any): void {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any): void {
    if (event.data === YT.PlayerState.PAUSED) {
      event.target.playVideo();
    }
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

  toggleMute(): void {
    this.isMuted = !this.isMuted;
    this.updateVideoUrl();

    if (this.player) {
      if (this.isMuted) {
        this.player.mute();
      } else {
        this.player.unMute();
      }
    }
  }

  playAudio(): void {
    if (this.audioRef && this.audioRef.nativeElement) {
      this.audioRef.nativeElement.play();
    }
  }

  preventPause(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.player && this.player.getPlayerState() === YT.PlayerState.PAUSED) {
      this.player.playVideo();
    }
  }


  toggleAudio(): void {
    const audio = this.audioRef.nativeElement;
    if (audio.paused) {
      audio.play();
      this.audioPaused = false;
    } else {
      audio.pause();
      this.audioPaused = true;
    }
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
