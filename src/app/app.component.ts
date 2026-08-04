import { Component } from '@angular/core';
import { Card } from './models/card.model';
import { MOCK_CARDS } from './models/mock-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  readonly title = 'angular-flashcards';
  readonly mockCards: readonly Card[] = MOCK_CARDS;

  currentIndex: number = 0;
  currentCard: Card | undefined = this.mockCards[this.currentIndex];

  /** Advance to the next flashcard */
  nextCard(): void {
    if (!this.mockCards || this.mockCards.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.mockCards.length;
    this.currentCard = this.mockCards[this.currentIndex];
  }
}
