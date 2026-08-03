import { Component } from '@angular/core';
import { Card } from './models/card.model';

const MOCK_CARDS: readonly Card[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris',
    category: 'Geography'
  },
  {
    id: 2,
    question: 'What is the capital of Spain?',
    answer: 'Madrid',
    category: 'Geography'
  },
  {
    id: 3,
    question: 'What is the capital of Germany?',
    answer: 'Berlin',
    category: 'Geography'
  }
];

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
