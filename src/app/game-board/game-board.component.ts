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
      { name: 'Ás', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
      { name: '4', value: 4 },
      { name: '5', value: 5 },
      { name: '6', value: 6 },
      { name: '7', value: 7 },
      { name: '8', value: 8 },
      { name: '9', value: 9 },
      { name: '10', value: 10 },
      { name: 'Valete', value: 11 },
      { name: 'Rainha', value: 12 },
      { name: 'Rei', value: 13 }
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
    this.checkWinner();
  }

  checkWinner(): void {
    const playerValue = this.playerCards.reduce((sum, card) => sum + card.value, 0);
    const botValue = this.botCards.reduce((sum, card) => sum + card.value, 0);

    if (playerValue > botValue) {
      this.winner = 'Jogador';
    } else if (playerValue < botValue) {
      this.winner = 'Robô';
    } else {
      this.winner = 'Empate';
    }
  }
}