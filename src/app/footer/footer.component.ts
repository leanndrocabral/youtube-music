import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../app.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  {
  @Input() currentVideo!: Video;
}
