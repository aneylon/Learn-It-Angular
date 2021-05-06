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
  currentCardNumber: number = 0
  currentCard: Card

  constructor(
    private cardService: CardService
  ) {
    this.cardService.selectedDeck.subscribe(
      deck => {
        this.cards = deck
        this.shuffledCards = this.shuffleCards(this.cards)
        this.currentCardNumber = 0
        this.currentCard = this.shuffledCards[this.currentCardNumber]
      }
    )
  }

  private randomNumber(max: number){
    let randomNumber = Math.floor(Math.random() * max)
    return randomNumber
  }

  private shuffleCards(cards: Card[]): Card[] {
    let shuffledCards: Card[] = cards.slice()
    for(let i = 0; i < shuffledCards.length; i++) {
      let randomCardNumber = this.randomNumber(shuffledCards.length)
      let temp = shuffledCards[randomCardNumber]
      shuffledCards[randomCardNumber] = shuffledCards[i]
      shuffledCards[i] = temp
    }
    return shuffledCards
  }

  ngOnInit(): void {
  }

  public knowCard(cardId: number): void {
    console.log('know it!', cardId)
  }

  public notSureCard(cardId: number): void {
    console.log('not sure', cardId)
  }

  public dontKnowCard(cardId: number): void {
    console.log('don\'t know', cardId)
  }  

}
