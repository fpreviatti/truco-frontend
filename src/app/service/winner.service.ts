import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WinnerService {
  constructor() {}

  verifyRoundWinner(playerCard: any, botCard?: any): 'player' | 'bot' | 'tie' | null {
    if (!botCard) return null;
    if (playerCard.value > botCard.value) return 'player';
    if (playerCard.value < botCard.value) return 'bot';
    return 'tie';
  }
}