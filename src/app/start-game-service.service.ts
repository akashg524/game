import { Injectable } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil}from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StartGameServiceService {
  constructor() { }
  Start() 
  {
    var obs =timer(0,2000);
    const time=timer(20000)
    let temp =obs.pipe(takeUntil(time));
    return temp;
  }
}
