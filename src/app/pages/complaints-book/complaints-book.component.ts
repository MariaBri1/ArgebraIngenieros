import { Component, OnInit } from '@angular/core';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf, NgFor, NgClass } from '@angular/common';


declare var YT: any;

@Component({
  standalone: true,
  imports: [NgIf, NgFor, NgClass, BannerComponent],
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.scss']
})


export class ComplaintsBookComponent implements OnInit {

  videoUrl: SafeResourceUrl | undefined;
  isMuted: boolean = true;
  private player: any;
  audioPaused = true;

  constructor(private sanitizer: DomSanitizer) {
    this.updateVideoUrl();
  }


  ngOnInit(): void {
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
