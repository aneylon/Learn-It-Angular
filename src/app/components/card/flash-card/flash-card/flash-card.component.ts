import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

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

  selectedDeck: number = 0

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.getDeck()
    })
  }

  private getDeck(): void {
    const deckId = +this.route.snapshot.paramMap.get('id')
    this.selectedDeck = deckId
    this.cardService.getDeck(deckId)
      .subscribe(deck => {
        this.cards = deck
        this.shuffledCards = this.shuffleCards(this.cards)
        this.currentCardNumber = 0
        this.currentCard = this.shuffledCards[this.currentCardNumber]
      })
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

  public knowCard(cardId: number): void {
    let res = this.cardService.knowCard(cardId)
      .subscribe( result => {
        console.log('flash card update res', result)
      })
    this.nextCard()
  }

  public notSureCard(cardId: number): void {
    let res = this.cardService.notSureCard(cardId)
      .subscribe( result => {
        console.log('flash card update res', result)
      })
    this.nextCard()
  }

  public dontKnowCard(cardId: number): void {
    let res = this.cardService.dontKnowCard(cardId)
      .subscribe( result => {
        console.log('flash card update res', result)
      })
    this.nextCard()
  }

  public nextCard(): void {
    this.currentCardNumber ++
    if(this.currentCardNumber >= this.shuffledCards.length) {
      this.currentCardNumber = 0
      this.shuffledCards = this.shuffleCards(this.cards)
    }
    this.currentCard = this.shuffledCards[this.currentCardNumber]
  }
}
