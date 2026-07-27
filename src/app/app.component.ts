import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-flashcards';

  flashcard: Card = {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris',
    category: 'Geography'
  };
}
