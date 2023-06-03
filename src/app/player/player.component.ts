import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PlaylistItems, Video } from '../app.interface';
import { videos } from 'src/services/api';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  url!: SafeResourceUrl;
  currentVideo!: Video;

  @Input() videos!: PlaylistItems[];
  @Output() emitCurrentVideo: EventEmitter<Video> = new EventEmitter();

  async ngOnInit() {
    await this.getVideo();
  }

  async getVideo(id: string = 'PLXVIDm1ahg') {
    const video = await videos.get(
      `?part=snippet,player&id=${id}&key=${environment.key}`
    );
    const item = video.data.items.shift();

    const url = '//' + item.player.embedHtml.substring(40, 73);
    const params = '?autoplay=1&enablejsapi=1';
    const safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(url + params);

    this.url = safeURL;
    this.currentVideo = item;
    this.emitCurrentVideo.emit(item);
  }
}
