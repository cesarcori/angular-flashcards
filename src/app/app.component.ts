import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import { MOCK_CARDS } from './models/mock-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readonly title = 'angular-flashcards';
  readonly mockCards: readonly Card[] = MOCK_CARDS;

  categories: string[] = [];
  selectedCategory: string = '';
  categoryCards: Card[] = [];
  currentIndex: number = 0;
  currentCard: Card | undefined;

  ngOnInit(): void {
    // 1. Extract unique categories
    this.categories = [
      ...new Set(
        this.mockCards
          .map(q => q.category)
          .filter((cat): cat is string => Boolean(cat))
      )
    ];

    // 2. Select the first category if available
    if (this.categories.length > 0) {
      this.selectCategory(this.categories[1]);
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categoryCards = this.mockCards.filter(q => q.category === this.selectedCategory);
    this.currentIndex = 0;
    this.currentCard = this.categoryCards[this.currentIndex];
  }

  nextCard(): void {
    if (!this.categoryCards || this.categoryCards.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.categoryCards.length;
    this.currentCard = this.categoryCards[this.currentIndex];
  }
}
