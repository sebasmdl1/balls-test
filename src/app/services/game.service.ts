import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ball } from '../components/models/ball';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public maxBalls: number = 8;
  public _checkedBalls$: Subject<Ball[]> = new Subject<Ball[]>()
  public _updateBetSlip$: Subject<Boolean> = new Subject<Boolean>()
  constructor(
  ) {
  }
  jsonBalls() {
    return [{
      number: 1,
      color: '#d55354',
      colorDefault: '#f6e4e4',
      checked: false
    },
    {
      number: 2,
      color: '#f8cb33',
      colorDefault: '#fff8e3',
      checked: false
    },
    {
      number: 3,
      color: '#45a86b',
      colorDefault: '#e2f3e5',
      checked: false
    },
    {
      number: 4,
      color: '#d55354',
      colorDefault: '#f6e4e4',
      checked: false
    },
    {
      number: 5,
      color: '#f8cb33',
      colorDefault: '#fff8e3',
      checked: false
    },
    {
      number: 6,
      color: '#45a86b',
      colorDefault: '#e2f3e5',
      checked: false
    },
    {
      number: 7,
      color: '#d55354',
      colorDefault: '#f6e4e4',
      checked: false
    },
    {
      number: 8,
      color: '#f8cb33',
      colorDefault: '#fff8e3',
      checked: false
    },
    {
      number: 9,
      color: '#45a86b',
      colorDefault: '#e2f3e5',
      checked: false
    },
    {
      number: 10,
      color: '#d55354',
      colorDefault: '#f6e4e4',
      checked: false
    }]
  }
  clearBet() {
    return this._checkedBalls$.next([])
  }
  updateBetSlip(): Observable<Boolean> {
    return this._updateBetSlip$.asObservable();
  }
  getBallChecked(): Observable<Ball[]> {
    return this._checkedBalls$.asObservable()
  }

}
