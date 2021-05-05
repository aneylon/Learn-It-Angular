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
  shuffledCards: Card[]
  currentCardNumber: number

  constructor(
    private cardService: CardService
  ) {
    this.cardService.selectedDeck.subscribe(
      deck => {
        this.cards = deck
        console.log('er body shufflein')
        this.shuffleCards(this.cards)
      }
    )
  }

  private randomNumber(max: number){
    let randomNumber = Math.floor(Math.random() * max)
    console.log('max was', max, 'randomNumber is', randomNumber)
    return randomNumber
  }

  private shuffleCards(cards: Card[]): Card[] {
    let shuffledCards: Card[] = cards.slice()
    console.log('start a shuffling')
    // randomly swap cards
    for(let i = 0; i < shuffledCards.length; i++) {
      let randomCardNumber = this.randomNumber(shuffledCards.length)
      let temp = shuffledCards[randomCardNumber]
      shuffledCards[randomCardNumber] = shuffledCards[i]
      shuffledCards[i] = temp
    }
    console.log('shuffled', shuffledCards)
    return shuffledCards
  }

  ngOnInit(): void {
  }

  // know card
  // not sure card
  // don't know card
  // shuffle deck
  

}
