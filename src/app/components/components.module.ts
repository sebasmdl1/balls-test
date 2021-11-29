import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BallSelectorComponent } from './ball-selector/ball-selector.component'
import { BetSlipComponent } from './bet-slip/bet-slip.component'


@NgModule({
  declarations: [
    BallSelectorComponent,
    BetSlipComponent
  ],
  exports: [
    BallSelectorComponent,
    BetSlipComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
