import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Ball } from '../models/ball';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {
  ballsChecked: Ball[] = []
  minMoneyBet: number = 5;
  winBall: Ball[] = [];
  betInput: number = 0;
  bet: number = 0;
  betFinished: boolean = false;
  _confirmBet: boolean = false;
  constructor(private _gameService: GameService) {
  }

  ngOnInit(): void {
    this._gameService.getBallChecked().subscribe(res => {
      this.ballsChecked = res
    })
  }
  finishBet() {
    this.bet = 0;
    this.winBall = []
    this.betInput = 0;
  }
  placeBet() {
    const winningBall = Math.floor(Math.random() * 9) + 1
    const newArr = this.ballsChecked
    this.winBall = [newArr[winningBall]]
    this.notifyModal(this.winBall)
  }
  notifyModal(winBall: Ball[]) {
    if (winBall[0] == undefined) {
      Swal.fire('Ooh!', `You Lost -${this.bet}`, 'error')
    } else if (winBall[0].checked == true) {
      Swal.fire('Good luck', `You won ${this.bet * 1.5} €`, 'success')
    }
    this.finishBet()
  }
  mixBalls(arr: Ball[]) {
    let length = arr.length;
    let d = length;
    let array = [];
    let k, i;
    for (i = 0; i < d; i++) {
      k = Math.floor(Math.random() * length);
      array.push(arr[k]);
      arr.splice(k, 1);
      length = arr.length;
    }
    for (i = 0; i < d; i++) {
      arr[i] = array[i];
    }
    return arr;
  }

  confirmBet(checkedBallLength: number) {
    this.betInput >= this.minMoneyBet ? this.bet = checkedBallLength * this.betInput : Swal.fire('Error', 'Minimum bet is 5 €', 'error')
  }
  checkBall(ball: Ball) {
    const checkedBalls = this.ballsChecked.filter(ball => ball.checked)
    this._gameService._checkedBalls$.next(checkedBalls)
    ball.checked = !ball.checked
  }

}
