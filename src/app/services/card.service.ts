import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cardUrl: string = `${environment.apiUrl}/card`
  public selectedDeck = new Subject<Card[]>();

  constructor(
    private http: HttpClient
  ) { }

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
  // notSure
  // dontKnow
}
