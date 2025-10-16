import { Component, type OnInit } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { NgForm } from '@angular/forms';

declare var YT: any;

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {


  audioPaused = true;
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


  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Aquí puedes realizar cualquier acción con los datos del formulario
      console.log('Formulario enviado', contactForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  ngOnInit(): void {

  }


}
