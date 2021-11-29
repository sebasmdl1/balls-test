import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Ball } from '../models/ball';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {
  balls: Ball[]
  circleSelected: boolean = false
  bet: number = 0;
  constructor(private _gameService: GameService) {
    this.balls = this._gameService.jsonBalls()
  }

  ngOnInit(): void {

  }
  getCheckedBall() {

  }
  clearBet() {
    this._gameService.clearBet()
    this.balls = this.balls.map((item: Ball) => {
      item.checked = false
      return item
    })
    this.circleSelected = false
  }
  checkBall(ball: Ball) {
    let checkedBalls = this.balls.filter(ball => ball.checked)
    checkedBalls.length < this._gameService.maxBalls ? ball.checked = !ball.checked : ball.checked = false
    const sendBallsSubject = this.balls.filter(ball => ball.checked)
    checkedBalls.length >= 0 ? this.circleSelected = true : this.circleSelected = false
    this._gameService._checkedBalls$.next(sendBallsSubject)
  }
}
