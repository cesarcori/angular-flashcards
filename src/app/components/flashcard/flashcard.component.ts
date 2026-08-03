import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() card!: Card;
  @Output() onNextCard = new EventEmitter<void>();

  isFlipped: boolean = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  triggerNextCard() {
    this.onNextCard.emit();
    this.isFlipped = true;
  }

}
