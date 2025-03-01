import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Card {
  name: string;
  suit: string;
  value: number;
  image: string;
}

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  playerCards: Card[] = [];
  botCards: Card[] = [];
  deck: Card[] = this.generateDeck();
  winner: string | null = null;

  constructor() {
    this.startGame();
  }

  generateDeck(): Card[] {
    const suits = ['Espadas', 'Ouros', 'Paus', 'Copas'];
    const values = [
      { name: 'as', value: 1 },
      { name: 'dois', value: 2 },
      { name: 'tres', value: 3 },
      { name: 'quatro', value: 4 },
      { name: 'cinco', value: 5 },
      { name: 'seis', value: 6 },
      { name: 'sete', value: 7 },
      { name: 'oito', value: 8 },
      { name: 'nove', value: 9 },
      { name: 'dez', value: 10 },
      { name: 'valete', value: 11 },
      { name: 'dama', value: 12 },
      { name: 'rei', value: 13 }
    ];

    const deck: Card[] = [];
    for (const suit of suits) {
      for (const card of values) {
        deck.push({
          name: `${card.name} de ${suit}`, // Inclui o nome e o naipe juntos
          suit,
          value: card.value,
          image: `assets/${card.name.toLowerCase()}-${suit.toLowerCase()}.png`
        });
      }
    }
    return deck;
  }

  drawCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(randomIndex, 1)[0]; // Remove e retorna a carta
  }

  startGame(): void {
    this.deck = this.generateDeck(); // Reinicializa o baralho
    this.playerCards = [this.drawCard(), this.drawCard(), this.drawCard()];
    this.botCards = [this.drawCard(), this.drawCard(), this.drawCard()];
  }

  playedCards: any[] = [];

playCard(card: any, player: string) {
  if (player === 'player') {
    this.playerCards = this.playerCards.filter(c => c !== card);
  } else {
    this.botCards = this.botCards.filter(c => c !== card);
  }
  this.playedCards.push(card);
}

}