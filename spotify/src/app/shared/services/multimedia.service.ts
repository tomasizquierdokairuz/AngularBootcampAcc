import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$:BehaviorSubject<any> = new BehaviorSubject<any>(undefined)
  public audio!:HTMLAudioElement
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject<string>('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject<string>('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject<string>('Paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(ResponseOk => {
      if(ResponseOk){
        console.log('un mensaje',ResponseOk)
        this.setAudio(ResponseOk)
    }
    })
    this.listenAllEvents()

   }

   private listenAllEvents():void{

      this.audio.addEventListener('timeUpdate',this.calculateTime,false)
      this.audio.addEventListener('playing',this.setPlayerStatus,false)
      this.audio.addEventListener('play',this.setPlayerStatus,false)
      this.audio.addEventListener('pause',this.setPlayerStatus,false)
      this.audio.addEventListener('ended',this.setPlayerStatus,false)

   }

   private calculateTime = () => {
      console.log('Disparando evento')
      const {duration, currentTime} = this.audio
      console.table([duration, currentTime])
      this.setTimeElapsed(currentTime)
      this.setRemaining(currentTime,duration)
   }

   private setPlayerStatus = (state: any) => {
    switch (state.type) { //TODO: --> playing
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break;
    }

  }

   private setTimeElapsed(currentTime: number): void {

    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor(currentTime / 60 % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    const diplayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(diplayFormat)
   }

   private setRemaining(currentTime: number, duration: number ):void{
    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor(timeLeft / 60 % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const diplayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(diplayFormat)
   }

   private setPercentage(currentTime: number, duration: number): void {
    //TODO duration ---> 100%
    //TODO currentTime ---> (x)
    //TODO (currentTime * 100) / duration
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage)
  }

   public setAudio(track:TrackModel):void{
    console.log('un mensaje',track)
    this.audio.src = track.url
    this.audio.play()
   }

   public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond

  }
}
