import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    url: 'http://localhost.track.mp3',
    cover : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihH16xKvVywz8T3mxmeABgKj4EOZ35iWkA&usqp=CAU',
    album : 'Audio Amnesia',
    name : 'Peleemos',
    duration: 3,
    _id: 1
  }
  constructor(){}

  ngOnInit (): void{}

}
