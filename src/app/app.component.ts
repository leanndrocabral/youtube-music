import { Component, OnInit } from '@angular/core';
import { playlistItems } from 'src/services/api';
import { PlaylistItems, Video } from './app.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  videos!: PlaylistItems[];
  currentVideo!: Video;

  public async ngOnInit() {
    const playlistId = 'OLAK5uy_lj-BYBgeyMYsSytj18p6TiNRQiIjbnAJk';

    const response = await playlistItems.get(
      `?part=snippet&maxResults=47&playlistId=${playlistId}&key=${environment.key}`
    );
    this.videos = response.data.items;  
  }

  onCurrentVideo(currentVideo: Video) {
    const publishedAt = currentVideo.snippet.publishedAt;
    const year = new Date(publishedAt).getFullYear();

    this.currentVideo = currentVideo;
    this.currentVideo.snippet.publishedAt = year;
  }
}
