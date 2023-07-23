import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()

  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('okokok')

  constructor() {
    setTimeout(() => {
      this.myObservable1$.next('okokok')
    }, 1000);
    setTimeout(() => {
      this.myObservable1$.error('malmalmal')
    }, 3500);

    //this.myObservable1$.next('aguaaguagua')
   }
}
