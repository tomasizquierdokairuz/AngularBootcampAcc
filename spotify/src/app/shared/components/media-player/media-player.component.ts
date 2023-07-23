import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    url: 'http://localhost.track.mp3',
    cover : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMihH16xKvVywz8T3mxmeABgKj4EOZ35iWkA&usqp=CAU',
    album : 'Audio Amnesia',
    name : 'Peleemos',
    duration: 3,
    _id: 1
  }
  listObservers$: Array<Subscription>=[]

  constructor(private multimediaService: MultimediaService){}

  ngOnInit (): void{

    const Observable1$ = this.multimediaService.myObservable1$
    .subscribe(
      {
        next:(responseOk)=>{
          console.log('Todo OK')
        },
        error:(error)=>{
          console.log('Todo mal')
        }
      }
    )

  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
