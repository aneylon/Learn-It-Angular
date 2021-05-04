import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})
export class FlashCardComponent implements OnInit {
  cards: Card[]
  // selected deck
  
  constructor(
    private cardService: CardService
  ) {
    this.cardService.selectedDeck.subscribe(
      deck => this.cards = deck
    )
  }

  ngOnInit(): void {
  }

  // know card
  // not sure card
  // don't know card
  // shuffle deck
  

}
