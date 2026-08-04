import { Component } from '@angular/core';
import { MOCK_CARDS } from './models/mock-cards';

function getRandomElement<T>(items: readonly T[]): T | null {
  if (items.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly title = 'angular-flashcards';
  readonly mockCards = MOCK_CARDS;

  currentCard = getRandomElement(this.mockCards);

  nextCard() {
    this.currentCard = getRandomElement(this.mockCards);
  }
}
