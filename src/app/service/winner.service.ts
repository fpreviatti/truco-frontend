import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WinnerService {
  constructor() {}

  verifyRoundWinner(playerCard: any, botCard?: any): string {
    console.log('Player card:', playerCard);
    console.log('Bot card:', botCard); 
  if (playerCard.value > botCard.value) {
    console.log('Player wins the round');
    return 'player';
  } else if (playerCard.value < botCard.value) {
    console.log('Bot wins the round');
    return 'bot';
  } else {
    console.log('Round is a tie');
    return 'tie';
  }
  }
}