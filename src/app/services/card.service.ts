import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { UserCardKnowledge } from '../models/UserCardKnowledge';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardUrl: string = `${environment.apiUrl}/card`
  public selectedDeck = new Subject<Card[]>();

  constructor(
    private http: HttpClient
  ) { }

  public addNewCard(newCard: Card) {
    const result = this.http.post<Card>(`${this.cardUrl}/newCard`, newCard)
    return result
  }

  public selectDeck(deckId: number) {
    this.getDeck(deckId)
      .subscribe(deck => {
        this.selectedDeck.next(deck)
      })
  }

  // get deck by id
  public getDeck(deckId: number): Observable<Card[]>{
    const result = this.http.get<Card[]>(`${this.cardUrl}/deck/${deckId}`)
    return result
  }

  //save user response
  // know
  public knowCard(cardId: number): Observable<string>{
    const userUpdate: UserCardKnowledge = {
      userId: 1,
      cardId
    }
    const result = this.http.put<string>(`${this.cardUrl}/knowCard`, userUpdate)
    return result
  }

  // notSure
  public notSureCard(cardId: number): Observable<string>{
    const userUpdate: UserCardKnowledge = {
      userId: 1,
      cardId
    }
    const result = this.http.put<string>(`${this.cardUrl}/notSureCard`, userUpdate)
    return result
  }

  // dontKnow
  public dontKnowCard(cardId: number): Observable<string>{
    const userUpdate: UserCardKnowledge = {
      userId: 1,
      cardId
    }
    const result = this.http.put<string>(`${this.cardUrl}/dontKnowCard`, userUpdate)
    return result
  }

}
